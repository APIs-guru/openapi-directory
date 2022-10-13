package operations

type GetOrganizationAPIRequestsOverviewPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationAPIRequestsOverviewQueryParams struct {
	T0       *string  `queryParam:"style=form,explode=true,name=t0"`
	T1       *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetOrganizationAPIRequestsOverviewRequest struct {
	PathParams  GetOrganizationAPIRequestsOverviewPathParams
	QueryParams GetOrganizationAPIRequestsOverviewQueryParams
}

type GetOrganizationAPIRequestsOverviewResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	GetOrganizationAPIRequestsOverview200ApplicationJSONObject map[string]interface{}
}
