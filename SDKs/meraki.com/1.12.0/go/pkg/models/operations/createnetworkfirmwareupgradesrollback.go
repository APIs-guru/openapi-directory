package operations

import (
"time")

type CreateNetworkFirmwareUpgradesRollbackPathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}


type CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum string

const (
    CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumWireless CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = "wireless"
CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumSwitch CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = "switch"
CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumAppliance CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = "appliance"
CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumCamera CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = "camera"
CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumVmxHost CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = "vmxHost"
CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnumCellularGateway CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum = "cellularGateway"
)



type CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum string

const (
    CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumPerformance CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = "performance"
CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumStability CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = "stability"
CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumBrokeOldFeatures CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = "broke old features"
CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumUnifyingNetworksVersions CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = "unifying networks versions"
CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumTesting CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = "testing"
CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnumOther CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum = "other"
)


type CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons struct {
    Category CreateNetworkFirmwareUpgradesRollbackRequestBodyReasonsCategoryEnum `json:"category"`
    Comment string `json:"comment"`
    
}

type CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion struct {
    ID *string `json:"id,omitempty"`
    
}

type CreateNetworkFirmwareUpgradesRollbackRequestBody struct {
    Product *CreateNetworkFirmwareUpgradesRollbackRequestBodyProductEnum `json:"product,omitempty"`
    Reasons []CreateNetworkFirmwareUpgradesRollbackRequestBodyReasons `json:"reasons"`
    Time *time.Time `json:"time,omitempty"`
    ToVersion *CreateNetworkFirmwareUpgradesRollbackRequestBodyToVersion `json:"toVersion,omitempty"`
    
}

type CreateNetworkFirmwareUpgradesRollbackRequest struct {
    PathParams CreateNetworkFirmwareUpgradesRollbackPathParams 
    Request CreateNetworkFirmwareUpgradesRollbackRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkFirmwareUpgradesRollbackResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkFirmwareUpgradesRollback200ApplicationJSONObject map[string]interface{} 
    
}

