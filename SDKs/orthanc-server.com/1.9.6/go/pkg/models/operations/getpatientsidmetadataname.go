package operations

type GetPatientsIDMetadataNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetPatientsIDMetadataNameHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetPatientsIDMetadataNameRequest struct {
	PathParams GetPatientsIDMetadataNamePathParams
	Headers    GetPatientsIDMetadataNameHeaders
}

type GetPatientsIDMetadataNameResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
