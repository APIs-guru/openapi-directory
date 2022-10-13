package operations

type GetExportsQueryParams struct {
	Limit *float64 `queryParam:"style=form,explode=true,name=limit"`
	Since *float64 `queryParam:"style=form,explode=true,name=since"`
}

type GetExportsRequest struct {
	QueryParams GetExportsQueryParams
}

type GetExportsResponse struct {
	ContentType                     string
	GetExports200ApplicationJSONAny *interface{}
	StatusCode                      int64
}
