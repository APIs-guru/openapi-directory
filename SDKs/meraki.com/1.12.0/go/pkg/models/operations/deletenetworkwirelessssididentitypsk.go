package operations

type DeleteNetworkWirelessSsidIdentityPskPathParams struct {
	IdentityPskID string `pathParam:"style=simple,explode=false,name=identityPskId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	Number        string `pathParam:"style=simple,explode=false,name=number"`
}

type DeleteNetworkWirelessSsidIdentityPskRequest struct {
	PathParams DeleteNetworkWirelessSsidIdentityPskPathParams
}

type DeleteNetworkWirelessSsidIdentityPskResponse struct {
	ContentType string
	StatusCode  int64
}
