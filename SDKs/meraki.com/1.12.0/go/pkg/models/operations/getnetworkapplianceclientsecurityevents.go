package operations

type GetNetworkApplianceClientSecurityEventsPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceClientSecurityEventsSortOrderEnum string

const (
	GetNetworkApplianceClientSecurityEventsSortOrderEnumAscending  GetNetworkApplianceClientSecurityEventsSortOrderEnum = "ascending"
	GetNetworkApplianceClientSecurityEventsSortOrderEnumDescending GetNetworkApplianceClientSecurityEventsSortOrderEnum = "descending"
)

type GetNetworkApplianceClientSecurityEventsQueryParams struct {
	EndingBefore  *string                                               `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64                                                `queryParam:"style=form,explode=true,name=perPage"`
	SortOrder     *GetNetworkApplianceClientSecurityEventsSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	StartingAfter *string                                               `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string                                               `queryParam:"style=form,explode=true,name=t0"`
	T1            *string                                               `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32                                              `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkApplianceClientSecurityEventsRequest struct {
	PathParams  GetNetworkApplianceClientSecurityEventsPathParams
	QueryParams GetNetworkApplianceClientSecurityEventsQueryParams
}

type GetNetworkApplianceClientSecurityEventsResponse struct {
	ContentType                                                     string
	Headers                                                         map[string][]string
	StatusCode                                                      int64
	GetNetworkApplianceClientSecurityEvents200ApplicationJSONObject map[string]interface{}
}
