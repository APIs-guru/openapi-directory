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
UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfsha1 UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "prfsha1"
UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumPrfmd5 UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "prfmd5"
UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnumDefault UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum = "default"
)


type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies struct {
    ChildAuthAlgo []string `json:"childAuthAlgo,omitempty"`
    ChildCipherAlgo []string `json:"childCipherAlgo,omitempty"`
    ChildLifetime *int64 `json:"childLifetime,omitempty"`
    ChildPfsGroup []string `json:"childPfsGroup,omitempty"`
    IkeAuthAlgo []string `json:"ikeAuthAlgo,omitempty"`
    IkeCipherAlgo []string `json:"ikeCipherAlgo,omitempty"`
    IkeDiffieHellmanGroup []string `json:"ikeDiffieHellmanGroup,omitempty"`
    IkeLifetime *int64 `json:"ikeLifetime,omitempty"`
    IkePrfAlgo []UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPoliciesIkePrfAlgoEnum `json:"ikePrfAlgo,omitempty"`
    
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers struct {
    IkeVersion *UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIkeVersionEnum `json:"ikeVersion,omitempty"`
    IpsecPolicies *UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeersIpsecPolicies `json:"ipsecPolicies,omitempty"`
    IpsecPoliciesPreset *string `json:"ipsecPoliciesPreset,omitempty"`
    Name string `json:"name"`
    NetworkTags []string `json:"networkTags,omitempty"`
    PrivateSubnets []string `json:"privateSubnets"`
    PublicIP string `json:"publicIp"`
    RemoteID *string `json:"remoteId,omitempty"`
    Secret string `json:"secret"`
    
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody struct {
    Peers []UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBodyPeers `json:"peers"`
    
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest struct {
    PathParams UpdateOrganizationApplianceVpnThirdPartyVpnPeersPathParams 
    Request UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationApplianceVpnThirdPartyVpnPeers200ApplicationJSONObject map[string]interface{} 
    
}

