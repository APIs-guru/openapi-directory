package operations

type GetStudiesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudiesIDQueryParams struct {
	Full  *bool `queryParam:"style=form,explode=true,name=full"`
	Short *bool `queryParam:"style=form,explode=true,name=short"`
}

type GetStudiesIDRequest struct {
	PathParams  GetStudiesIDPathParams
	QueryParams GetStudiesIDQueryParams
}

type GetStudiesIDResponse struct {
	ContentType                       string
	GetStudiesID200ApplicationJSONAny *interface{}
	StatusCode                        int64
}
