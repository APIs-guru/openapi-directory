package operations

type GetPeersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPeersIDRequest struct {
	PathParams GetPeersIDPathParams
}

type GetPeersIDResponse struct {
	ContentType                     string
	GetPeersID200ApplicationJSONAny *interface{}
	StatusCode                      int64
}
