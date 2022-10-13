package operations

type GetChangesQueryParams struct {
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
}

type GetChangesRequest struct {
	QueryParams GetChangesQueryParams
}

type GetChangesResponse struct {
	ContentType                     string
	GetChanges200ApplicationJSONAny *interface{}
	StatusCode                      int64
}
