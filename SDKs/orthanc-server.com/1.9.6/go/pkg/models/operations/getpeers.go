package operations

type GetPeersQueryParams struct {
	Expand *string `queryParam:"style=form,explode=true,name=expand"`
}

type GetPeersRequest struct {
	QueryParams GetPeersQueryParams
}

type GetPeersResponse struct {
	ContentType                   string
	GetPeers200ApplicationJSONAny *interface{}
	StatusCode                    int64
}
