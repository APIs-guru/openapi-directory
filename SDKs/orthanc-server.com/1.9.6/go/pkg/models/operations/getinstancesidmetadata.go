package operations

type GetInstancesIDMetadataPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDMetadataQueryParams struct {
	Expand *string `queryParam:"style=form,explode=true,name=expand"`
}

type GetInstancesIDMetadataRequest struct {
	PathParams  GetInstancesIDMetadataPathParams
	QueryParams GetInstancesIDMetadataQueryParams
}

type GetInstancesIDMetadataResponse struct {
	ContentType                                 string
	GetInstancesIDMetadata200ApplicationJSONAny *interface{}
	StatusCode                                  int64
}
