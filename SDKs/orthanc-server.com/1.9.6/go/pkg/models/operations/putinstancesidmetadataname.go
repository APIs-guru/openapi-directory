package operations

type PutInstancesIDMetadataNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type PutInstancesIDMetadataNameHeaders struct {
	IfMatch *string `header:"name=If-Match"`
}

type PutInstancesIDMetadataNameRequest struct {
	PathParams PutInstancesIDMetadataNamePathParams
	Headers    PutInstancesIDMetadataNameHeaders
	Request    []byte `request:"mediaType=text/plain"`
}

type PutInstancesIDMetadataNameResponse struct {
	ContentType string
	StatusCode  int64
}
