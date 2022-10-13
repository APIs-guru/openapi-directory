package operations

type UpdateNetworkSwitchRoutingOspfPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum string

const (
	UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNormal UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = "normal"
	UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumStub   UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = "stub"
	UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnumNssa   UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum = "nssa"
)

type UpdateNetworkSwitchRoutingOspfRequestBodyAreas struct {
	AreaID   int64                                                      `json:"areaId"`
	AreaName string                                                     `json:"areaName"`
	AreaType UpdateNetworkSwitchRoutingOspfRequestBodyAreasAreaTypeEnum `json:"areaType"`
}

type UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey struct {
	ID         *int64  `json:"id"`
	Passphrase *string `json:"passphrase"`
}

type UpdateNetworkSwitchRoutingOspfRequestBody struct {
	Areas                    []UpdateNetworkSwitchRoutingOspfRequestBodyAreas               `json:"areas"`
	DeadTimerInSeconds       *int64                                                         `json:"deadTimerInSeconds"`
	Enabled                  *bool                                                          `json:"enabled"`
	HelloTimerInSeconds      *int64                                                         `json:"helloTimerInSeconds"`
	Md5AuthenticationEnabled *bool                                                          `json:"md5AuthenticationEnabled"`
	Md5AuthenticationKey     *UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey `json:"md5AuthenticationKey"`
}

type UpdateNetworkSwitchRoutingOspfRequest struct {
	PathParams UpdateNetworkSwitchRoutingOspfPathParams
	Request    *UpdateNetworkSwitchRoutingOspfRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchRoutingOspfResponse struct {
	ContentType                                            string
	StatusCode                                             int64
	UpdateNetworkSwitchRoutingOspf200ApplicationJSONObject map[string]interface{}
}
