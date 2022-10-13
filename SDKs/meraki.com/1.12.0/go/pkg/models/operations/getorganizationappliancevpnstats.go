package operations

type GetOrganizationApplianceVpnStatsPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationApplianceVpnStatsQueryParams struct {
	EndingBefore  *string  `queryParam:"style=form,explode=true,name=endingBefore"`
	NetworkIds    []string `queryParam:"style=form,explode=false,name=networkIds"`
	PerPage       *int64   `queryParam:"style=form,explode=true,name=perPage"`
	StartingAfter *string  `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string  `queryParam:"style=form,explode=true,name=t0"`
	T1            *string  `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32 `queryParam:"style=form,explode=true,name=timespan"`
}

type GetOrganizationApplianceVpnStatsRequest struct {
	PathParams  GetOrganizationApplianceVpnStatsPathParams
	QueryParams GetOrganizationApplianceVpnStatsQueryParams
}

type GetOrganizationApplianceVpnStatsResponse struct {
	ContentType                                              string
	Headers                                                  map[string][]string
	StatusCode                                               int64
	GetOrganizationApplianceVpnStats200ApplicationJSONObject map[string]interface{}
}
