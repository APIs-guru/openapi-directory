package operations

type ClearUserSessionsPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type ClearUserSessionsRequest struct {
	PathParams ClearUserSessionsPathParams
	Request    []byte `request:"mediaType=application/octet-stream"`
}

type ClearUserSessionsResponse struct {
	ContentType string
	StatusCode  int64
}
