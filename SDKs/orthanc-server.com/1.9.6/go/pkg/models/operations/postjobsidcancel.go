package operations

type PostJobsIDCancelPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostJobsIDCancelRequest struct {
	PathParams PostJobsIDCancelPathParams
}

type PostJobsIDCancelResponse struct {
	ContentType                           string
	PostJobsIDCancel200ApplicationJSONAny *interface{}
	StatusCode                            int64
}
