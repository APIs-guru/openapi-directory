package operations

type ClaimNetworkDevicesPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type ClaimNetworkDevicesRequestBody struct {
	Serials []string `json:"serials"`
}

type ClaimNetworkDevicesRequest struct {
	PathParams ClaimNetworkDevicesPathParams
	Request    ClaimNetworkDevicesRequestBody `request:"mediaType=application/json"`
}

type ClaimNetworkDevicesResponse struct {
	ContentType string
	StatusCode  int64
}
