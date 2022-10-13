package operations

type UpdateNetworkWirelessSsidIdentityPskPathParams struct {
	IdentityPskID string `pathParam:"style=simple,explode=false,name=identityPskId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	Number        string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidIdentityPskRequestBody struct {
	GroupPolicyID *string `json:"groupPolicyId"`
	Name          *string `json:"name"`
	Passphrase    *string `json:"passphrase"`
}

type UpdateNetworkWirelessSsidIdentityPskRequest struct {
	PathParams UpdateNetworkWirelessSsidIdentityPskPathParams
	Request    *UpdateNetworkWirelessSsidIdentityPskRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidIdentityPskResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	UpdateNetworkWirelessSsidIdentityPsk200ApplicationJSONObject map[string]interface{}
}
