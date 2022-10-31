package operations

type GetStudiesIDMetadataPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetStudiesIDMetadataQueryParams struct {
	Expand *string `queryParam:"style=form,explode=true,name=expand"`
}

type GetStudiesIDMetadataRequest struct {
	PathParams  GetStudiesIDMetadataPathParams
	QueryParams GetStudiesIDMetadataQueryParams
}

type GetStudiesIDMetadataResponse struct {
	ContentType                               string
	GetStudiesIDMetadata200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
