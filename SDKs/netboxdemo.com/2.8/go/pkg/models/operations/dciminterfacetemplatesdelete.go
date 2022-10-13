package operations

type DcimInterfaceTemplatesDeletePathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DcimInterfaceTemplatesDeleteRequest struct {
	PathParams DcimInterfaceTemplatesDeletePathParams
}

type DcimInterfaceTemplatesDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
