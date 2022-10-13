package operations

type GetPatientsIDModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPatientsIDModuleQueryParams struct {
	IgnoreLength []string `queryParam:"style=form,explode=true,name=ignore-length"`
	Short        *bool    `queryParam:"style=form,explode=true,name=short"`
	Simplify     *bool    `queryParam:"style=form,explode=true,name=simplify"`
}

type GetPatientsIDModuleRequest struct {
	PathParams  GetPatientsIDModulePathParams
	QueryParams GetPatientsIDModuleQueryParams
}

type GetPatientsIDModuleResponse struct {
	ContentType                              string
	GetPatientsIDModule200ApplicationJSONAny *interface{}
	StatusCode                               int64
}
