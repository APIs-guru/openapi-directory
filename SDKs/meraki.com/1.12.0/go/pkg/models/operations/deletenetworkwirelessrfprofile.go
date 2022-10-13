package operations

type DeleteNetworkWirelessRfProfilePathParams struct {
	NetworkID   string `pathParam:"style=simple,explode=false,name=networkId"`
	RfProfileID string `pathParam:"style=simple,explode=false,name=rfProfileId"`
}

type DeleteNetworkWirelessRfProfileRequest struct {
	PathParams DeleteNetworkWirelessRfProfilePathParams
}

type DeleteNetworkWirelessRfProfileResponse struct {
	ContentType string
	StatusCode  int64
}
