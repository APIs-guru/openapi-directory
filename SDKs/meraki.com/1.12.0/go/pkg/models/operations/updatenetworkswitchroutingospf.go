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
	ID         *int64  `json:"id,omitempty"`
	Passphrase *string `json:"passphrase,omitempty"`
}

type UpdateNetworkSwitchRoutingOspfRequestBody struct {
	Areas                    []UpdateNetworkSwitchRoutingOspfRequestBodyAreas               `json:"areas,omitempty"`
	DeadTimerInSeconds       *int64                                                         `json:"deadTimerInSeconds,omitempty"`
	Enabled                  *bool                                                          `json:"enabled,omitempty"`
	HelloTimerInSeconds      *int64                                                         `json:"helloTimerInSeconds,omitempty"`
	Md5AuthenticationEnabled *bool                                                          `json:"md5AuthenticationEnabled,omitempty"`
	Md5AuthenticationKey     *UpdateNetworkSwitchRoutingOspfRequestBodyMd5AuthenticationKey `json:"md5AuthenticationKey,omitempty"`
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
