package operations

type GetOrganizationAPIRequestsPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationAPIRequestsQueryParams struct {
	AdminID       *string  `queryParam:"style=form,explode=true,name=adminId"`
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	Method        *string  `queryParam:"style=form,explode=true,name=method"`
	Path          *string  `queryParam:"style=form,explode=true,name=path"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	ResponseCode  *int64   `queryParam:"style=form,explode=true,name=responseCode"`
	SourceIP      *string  `queryParam:"style=form,explode=true,name=sourceIp"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string  `queryParam:"style=form,explode=true,name=t0"`
	T1            *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetOrganizationAPIRequestsRequest struct {
	PathParams  GetOrganizationAPIRequestsPathParams
	QueryParams GetOrganizationAPIRequestsQueryParams
}

type GetOrganizationAPIRequestsResponse struct {
	ContentType                                        string
	Headers                                            map[string][]string
	StatusCode                                         int64
	GetOrganizationAPIRequests200ApplicationJSONObject map[string]interface{}
}
