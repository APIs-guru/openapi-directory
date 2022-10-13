package operations

type GetQueriesIDModalityPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetQueriesIDModalityRequest struct {
	PathParams GetQueriesIDModalityPathParams
}

type GetQueriesIDModalityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
