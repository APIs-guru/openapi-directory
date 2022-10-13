package operations

type PutSeriesIDMetadataNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutSeriesIDMetadataNameHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type PutSeriesIDMetadataNameRequest struct {
	PathParams PutSeriesIDMetadataNamePathParams
	Headers    PutSeriesIDMetadataNameHeaders
	Request    []byte `request:"mediaType=text/plain"`
}

type PutSeriesIDMetadataNameResponse struct {
	ContentType string
	StatusCode  int64
}
