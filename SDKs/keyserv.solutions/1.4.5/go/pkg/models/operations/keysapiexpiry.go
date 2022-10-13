package operations

type KeysAPIExpiryPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type KeysAPIExpiryRequest struct {
	PathParams KeysAPIExpiryPathParams
}

type KeysAPIExpiryResponse struct {
	ContentType                          string
	KeysAPIExpiry200ApplicationJSONOneOf *interface{}
	StatusCode                           int64
}
