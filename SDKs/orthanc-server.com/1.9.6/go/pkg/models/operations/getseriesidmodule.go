package operations

type GetSeriesIDModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSeriesIDModuleQueryParams struct {
	IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
	Short        *bool    `queryParam:"style=form,explode=true,name=short"`
	Simplify     *bool    `queryParam:"style=form,explode=true,name=simplify"`
}

type GetSeriesIDModuleRequest struct {
	PathParams  GetSeriesIDModulePathParams
	QueryParams GetSeriesIDModuleQueryParams
}

type GetSeriesIDModuleResponse struct {
	ContentType                            string
	GetSeriesIDModule200ApplicationJSONAny *interface{}
	StatusCode                             int64
}
