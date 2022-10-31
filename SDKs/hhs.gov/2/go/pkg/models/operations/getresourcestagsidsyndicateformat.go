package operations

type GetResourcesTagsIDSyndicateFormatPathParams struct {
	Format string `pathParam:"style=simple,explode=false,name=format"`
	ID     int64  `pathParam:"style=simple,explode=false,name=id"`
}

type GetResourcesTagsIDSyndicateFormatQueryParams struct {
	DisplayMethod *string `queryParam:"style=form,explode=false,name=displayMethod"`
}

type GetResourcesTagsIDSyndicateFormatRequest struct {
	PathParams  GetResourcesTagsIDSyndicateFormatPathParams
	QueryParams GetResourcesTagsIDSyndicateFormatQueryParams
}

type GetResourcesTagsIDSyndicateFormatResponse struct {
	ContentType                                               string
	GetResourcesTagsIDSyndicateFormat200ApplicationJSONString *string
	StatusCode                                                int64
}
