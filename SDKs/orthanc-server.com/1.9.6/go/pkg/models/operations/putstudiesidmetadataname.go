package operations

type PutStudiesIDMetadataNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutStudiesIDMetadataNameHeaders struct {
	IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
}

type PutStudiesIDMetadataNameRequest struct {
	PathParams PutStudiesIDMetadataNamePathParams
	Headers    PutStudiesIDMetadataNameHeaders
	Request    []byte `request:"mediaType=text/plain"`
}

type PutStudiesIDMetadataNameResponse struct {
	ContentType string
	StatusCode  int64
}
