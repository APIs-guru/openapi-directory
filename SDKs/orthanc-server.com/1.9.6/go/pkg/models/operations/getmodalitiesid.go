package operations

type GetModalitiesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetModalitiesIDRequest struct {
	PathParams GetModalitiesIDPathParams
}

type GetModalitiesIDResponse struct {
	ContentType                          string
	GetModalitiesID200ApplicationJSONAny *interface{}
	StatusCode                           int64
}
