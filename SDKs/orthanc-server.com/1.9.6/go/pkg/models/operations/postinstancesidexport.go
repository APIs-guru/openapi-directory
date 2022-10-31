package operations

type PostInstancesIDExportPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostInstancesIDExportRequest struct {
	PathParams PostInstancesIDExportPathParams
	Request    []byte `request:"mediaType=text/plain"`
}

type PostInstancesIDExportResponse struct {
	ContentType string
	StatusCode  int64
}
