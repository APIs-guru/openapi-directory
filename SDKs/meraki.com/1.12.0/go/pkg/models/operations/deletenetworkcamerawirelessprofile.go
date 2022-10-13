package operations

type DeleteNetworkCameraWirelessProfilePathParams struct {
	NetworkID         string `pathParam:"style=simple,explode=false,name=networkId"`
	WirelessProfileID string `pathParam:"style=simple,explode=false,name=wirelessProfileId"`
}

type DeleteNetworkCameraWirelessProfileRequest struct {
	PathParams DeleteNetworkCameraWirelessProfilePathParams
}

type DeleteNetworkCameraWirelessProfileResponse struct {
	ContentType string
	StatusCode  int64
}
