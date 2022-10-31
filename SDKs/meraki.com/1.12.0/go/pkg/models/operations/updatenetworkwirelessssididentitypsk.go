package operations



type UpdateNetworkWirelessSsidIdentityPskPathParams struct {
    IdentityPskID string `pathParam:"style=simple,explode=false,name=identityPskId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    Number string `pathParam:"style=simple,explode=false,name=number"`
    
}

type UpdateNetworkWirelessSsidIdentityPskRequestBody struct {
    GroupPolicyID *string `json:"groupPolicyId,omitempty"`
    Name *string `json:"name,omitempty"`
    Passphrase *string `json:"passphrase,omitempty"`
    
}

type UpdateNetworkWirelessSsidIdentityPskRequest struct {
    PathParams UpdateNetworkWirelessSsidIdentityPskPathParams 
    Request *UpdateNetworkWirelessSsidIdentityPskRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkWirelessSsidIdentityPskResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject map[string]interface{} 
    
}

