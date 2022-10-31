package operations

type GetPluginsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPluginsIDRequest struct {
	PathParams GetPluginsIDPathParams
}

type GetPluginsIDResponse struct {
	ContentType                       string
	GetPluginsID200ApplicationJSONAny *interface{}
	StatusCode                        int64
}
