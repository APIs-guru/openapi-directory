package operations

type GetJobsIDKeyPathParams struct {
	ID  string `pathParam:"style=simple,explode=false,name=id"`
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type GetJobsIDKeyRequest struct {
	PathParams GetJobsIDKeyPathParams
}

type GetJobsIDKeyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
