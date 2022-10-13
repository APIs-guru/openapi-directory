package operations

type GetQueriesIDLevelPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetQueriesIDLevelRequest struct {
	PathParams GetQueriesIDLevelPathParams
}

type GetQueriesIDLevelResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
