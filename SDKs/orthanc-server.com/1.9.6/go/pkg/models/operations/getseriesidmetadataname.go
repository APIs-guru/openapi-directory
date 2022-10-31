package operations

type GetSeriesIDMetadataNamePathParams struct {
	ID   string `pathParam:"style=simple,explode=false,name=id"`
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type GetSeriesIDMetadataNameHeaders struct {
	IfNoneMatch *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetSeriesIDMetadataNameRequest struct {
	PathParams GetSeriesIDMetadataNamePathParams
	Headers    GetSeriesIDMetadataNameHeaders
}

type GetSeriesIDMetadataNameResponse struct {
	Body        []byte
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
