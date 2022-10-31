package operations

type GetInstancesIDTagsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDTagsQueryParams struct {
	IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
	Short        *bool    `queryParam:"style=form,explode=true,name=short"`
	Simplify     *bool    `queryParam:"style=form,explode=true,name=simplify"`
}

type GetInstancesIDTagsRequest struct {
	PathParams  GetInstancesIDTagsPathParams
	QueryParams GetInstancesIDTagsQueryParams
}

type GetInstancesIDTagsResponse struct {
	ContentType                             string
	GetInstancesIDTags200ApplicationJSONAny *interface{}
	StatusCode                              int64
}
