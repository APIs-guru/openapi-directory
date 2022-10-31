package operations

type KeysAPICurrentPathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type KeysAPICurrentRequest struct {
	PathParams KeysAPICurrentPathParams
}

type KeysAPICurrentResponse struct {
	ContentType                           string
	KeysAPICurrent200ApplicationJSONOneOf *interface{}
	StatusCode                            int64
}
