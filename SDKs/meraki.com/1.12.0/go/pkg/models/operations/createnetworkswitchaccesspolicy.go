package operations

type CreateNetworkSwitchAccessPolicyPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum string

const (
	CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumEightHundredAndTwo1x    CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = "802.1x"
	CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumMacAuthenticationBypass CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = "MAC authentication bypass"
	CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnumHybridAuthentication    CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum = "Hybrid authentication"
)

type CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum string

const (
	CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumSingleHost  CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Single-Host"
	CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiDomain CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Multi-Domain"
	CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiHost   CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Multi-Host"
	CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnumMultiAuth   CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum = "Multi-Auth"
)

// CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth
// Critical auth settings for when authentication is rejected by the RADIUS server
type CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth struct {
	DataVlanID        *int64 `json:"dataVlanId,omitempty"`
	SuspendPortBounce *bool  `json:"suspendPortBounce,omitempty"`
	VoiceVlanID       *int64 `json:"voiceVlanId,omitempty"`
}

// CreateNetworkSwitchAccessPolicyRequestBodyRadius
// Object for RADIUS Settings
type CreateNetworkSwitchAccessPolicyRequestBodyRadius struct {
	CriticalAuth *CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth `json:"criticalAuth,omitempty"`
}

type CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers struct {
	Host   string `json:"host"`
	Port   int64  `json:"port"`
	Secret string `json:"secret"`
}

type CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers struct {
	Host   string `json:"host"`
	Port   int64  `json:"port"`
	Secret string `json:"secret"`
}

type CreateNetworkSwitchAccessPolicyRequestBody struct {
	AccessPolicyType               *CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum     `json:"accessPolicyType,omitempty"`
	GuestVlanID                    *int64                                                              `json:"guestVlanId,omitempty"`
	HostMode                       CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum              `json:"hostMode"`
	IncreaseAccessSpeed            *bool                                                               `json:"increaseAccessSpeed,omitempty"`
	Name                           string                                                              `json:"name"`
	Radius                         *CreateNetworkSwitchAccessPolicyRequestBodyRadius                   `json:"radius,omitempty"`
	RadiusAccountingEnabled        bool                                                                `json:"radiusAccountingEnabled"`
	RadiusAccountingServers        []CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers `json:"radiusAccountingServers,omitempty"`
	RadiusCoaSupportEnabled        bool                                                                `json:"radiusCoaSupportEnabled"`
	RadiusGroupAttribute           *string                                                             `json:"radiusGroupAttribute,omitempty"`
	RadiusServers                  []CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers           `json:"radiusServers"`
	RadiusTestingEnabled           bool                                                                `json:"radiusTestingEnabled"`
	URLRedirectWalledGardenEnabled bool                                                                `json:"urlRedirectWalledGardenEnabled"`
	URLRedirectWalledGardenRanges  []string                                                            `json:"urlRedirectWalledGardenRanges,omitempty"`
	VoiceVlanClients               *bool                                                               `json:"voiceVlanClients,omitempty"`
}

type CreateNetworkSwitchAccessPolicyRequest struct {
	PathParams CreateNetworkSwitchAccessPolicyPathParams
	Request    CreateNetworkSwitchAccessPolicyRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSwitchAccessPolicyResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	CreateNetworkSwitchAccessPolicy201ApplicationJSONObject map[string]interface{}
}
