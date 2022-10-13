package operations

type UpdateNetworkSwitchAccessPolicyPathParams struct {
	AccessPolicyNumber string `pathParam:"style=simple,explode=false,name=accessPolicyNumber"`
	NetworkID          string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum string

const (
	UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumEightHundredAndTwo1x    UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = "802.1x"
	UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumMacAuthenticationBypass UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = "MAC authentication bypass"
	UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumHybridAuthentication    UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = "Hybrid authentication"
)

type UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum string

const (
	UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumSingleHost  UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Single-Host"
	UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiDomain UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Multi-Domain"
	UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiHost   UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Multi-Host"
	UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiAuth   UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Multi-Auth"
)

type UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth struct {
	DataVlanID        *int64 `json:"dataVlanId"`
	SuspendPortBounce *bool  `json:"suspendPortBounce"`
	VoiceVlanID       *int64 `json:"voiceVlanId"`
}

type UpdateNetworkSwitchAccessPolicyRequestBodyRadius struct {
	CriticalAuth *UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth `json:"criticalAuth"`
}

type UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers struct {
	Host   string `json:"host"`
	Port   int64  `json:"port"`
	Secret string `json:"secret"`
}

type UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers struct {
	Host   string `json:"host"`
	Port   int64  `json:"port"`
	Secret string `json:"secret"`
}

type UpdateNetworkSwitchAccessPolicyRequestBody struct {
	AccessPolicyType               *UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum     `json:"accessPolicyType"`
	GuestVlanID                    *int64                                                              `json:"guestVlanId"`
	HostMode                       *UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum             `json:"hostMode"`
	IncreaseAccessSpeed            *bool                                                               `json:"increaseAccessSpeed"`
	Name                           *string                                                             `json:"name"`
	Radius                         *UpdateNetworkSwitchAccessPolicyRequestBodyRadius                   `json:"radius"`
	RadiusAccountingEnabled        *bool                                                               `json:"radiusAccountingEnabled"`
	RadiusAccountingServers        []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers `json:"radiusAccountingServers"`
	RadiusCoaSupportEnabled        *bool                                                               `json:"radiusCoaSupportEnabled"`
	RadiusGroupAttribute           *string                                                             `json:"radiusGroupAttribute"`
	RadiusServers                  []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers           `json:"radiusServers"`
	RadiusTestingEnabled           *bool                                                               `json:"radiusTestingEnabled"`
	URLRedirectWalledGardenEnabled *bool                                                               `json:"urlRedirectWalledGardenEnabled"`
	URLRedirectWalledGardenRanges  []string                                                            `json:"urlRedirectWalledGardenRanges"`
	VoiceVlanClients               *bool                                                               `json:"voiceVlanClients"`
}

type UpdateNetworkSwitchAccessPolicyRequest struct {
	PathParams UpdateNetworkSwitchAccessPolicyPathParams
	Request    *UpdateNetworkSwitchAccessPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchAccessPolicyResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateNetworkSwitchAccessPolicy200ApplicationJSONObject map[string]interface{}
}
