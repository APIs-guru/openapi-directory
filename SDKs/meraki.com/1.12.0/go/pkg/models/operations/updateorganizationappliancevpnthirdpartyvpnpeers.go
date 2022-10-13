package operations

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum string

const (
	UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnumOne UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum = "1"
	UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnumTwo UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum = "2"
)

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum string

const (
	UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha256 UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "prfsha256"
	UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1   UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "prfsha1"
	UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "prfmd5"
	UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault   UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "default"
)

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies struct {
	ChildAuthAlgo         []string                                                                                      `json:"childAuthAlgo"`
	ChildCipherAlgo       []string                                                                                      `json:"childCipherAlgo"`
	ChildLifetime         *int64                                                                                        `json:"childLifetime"`
	ChildPfsGroup         []string                                                                                      `json:"childPfsGroup"`
	IkeAuthAlgo           []string                                                                                      `json:"ikeAuthAlgo"`
	IkeCipherAlgo         []string                                                                                      `json:"ikeCipherAlgo"`
	IkeDiffieHellmanGroup []string                                                                                      `json:"ikeDiffieHellmanGroup"`
	IkeLifetime           *int64                                                                                        `json:"ikeLifetime"`
	IkePrfAlgo            []UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum `json:"ikePrfAlgo"`
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers struct {
	IkeVersion          *UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum `json:"ikeVersion"`
	IpsecPolicies       *UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies  `json:"ipsecPolicies"`
	IpsecPoliciesPreset *string                                                                         `json:"ipsecPoliciesPreset"`
	Name                string                                                                          `json:"name"`
	NetworkTags         []string                                                                        `json:"networkTags"`
	PrivateSubnets      []string                                                                        `json:"privateSubnets"`
	PublicIP            string                                                                          `json:"publicIp"`
	RemoteID            *string                                                                         `json:"remoteId"`
	Secret              string                                                                          `json:"secret"`
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody struct {
	Peers []UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers `json:"peers"`
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest struct {
	PathParams UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams
	Request    UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse struct {
	ContentType                                                              string
	StatusCode                                                               int64
	UpdateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJSONObject map[string]interface{}
}
