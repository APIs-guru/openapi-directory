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

// UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
// Critical auth settings for when authentication is rejected by the RADIUS server
type UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth struct {
	DataVlanID        *int64 `json:"dataVlanId,omitempty"`
	SuspendPortBounce *bool  `json:"suspendPortBounce,omitempty"`
	VoiceVlanID       *int64 `json:"voiceVlanId,omitempty"`
}

// UpdateNetworkSwitchAccessPolicyRequestBodyRadius
// Object for RADIUS Settings
type UpdateNetworkSwitchAccessPolicyRequestBodyRadius struct {
	CriticalAuth *UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth `json:"criticalAuth,omitempty"`
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
	AccessPolicyType               *UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum     `json:"accessPolicyType,omitempty"`
	GuestVlanID                    *int64                                                              `json:"guestVlanId,omitempty"`
	HostMode                       *UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum             `json:"hostMode,omitempty"`
	IncreaseAccessSpeed            *bool                                                               `json:"increaseAccessSpeed,omitempty"`
	Name                           *string                                                             `json:"name,omitempty"`
	Radius                         *UpdateNetworkSwitchAccessPolicyRequestBodyRadius                   `json:"radius,omitempty"`
	RadiusAccountingEnabled        *bool                                                               `json:"radiusAccountingEnabled,omitempty"`
	RadiusAccountingServers        []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers `json:"radiusAccountingServers,omitempty"`
	RadiusCoaSupportEnabled        *bool                                                               `json:"radiusCoaSupportEnabled,omitempty"`
	RadiusGroupAttribute           *string                                                             `json:"radiusGroupAttribute,omitempty"`
	RadiusServers                  []UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers           `json:"radiusServers,omitempty"`
	RadiusTestingEnabled           *bool                                                               `json:"radiusTestingEnabled,omitempty"`
	URLRedirectWalledGardenEnabled *bool                                                               `json:"urlRedirectWalledGardenEnabled,omitempty"`
	URLRedirectWalledGardenRanges  []string                                                            `json:"urlRedirectWalledGardenRanges,omitempty"`
	VoiceVlanClients               *bool                                                               `json:"voiceVlanClients,omitempty"`
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
