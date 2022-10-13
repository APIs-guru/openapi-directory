package operations

type GetInstancesIDModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstancesIDModuleQueryParams struct {
	IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
	Short        *bool    `queryParam:"style=form,explode=true,name=short"`
	Simplify     *bool    `queryParam:"style=form,explode=true,name=simplify"`
}

type GetInstancesIDModuleRequest struct {
	PathParams  GetInstancesIDModulePathParams
	QueryParams GetInstancesIDModuleQueryParams
}

type GetInstancesIDModuleResponse struct {
	ContentType                               string
	GetInstancesIDModule200ApplicationJSONAny *interface{}
	StatusCode                                int64
}
