package operations

type CreateNetworkWirelessSsidIdentityPskPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type CreateNetworkWirelessSsidIdentityPskRequestBody struct {
	GroupPolicyID string  `json:"groupPolicyId"`
	Name          string  `json:"name"`
	Passphrase    *string `json:"passphrase,omitempty"`
}

type CreateNetworkWirelessSsidIdentityPskRequest struct {
	PathParams CreateNetworkWirelessSsidIdentityPskPathParams
	Request    CreateNetworkWirelessSsidIdentityPskRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkWirelessSsidIdentityPskResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	CreateNetworkWirelessSsidIdentityPsk201ApplicationJSONObject map[string]interface{}
}
