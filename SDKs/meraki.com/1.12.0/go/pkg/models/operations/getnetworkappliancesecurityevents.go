package operations

type GetNetworkApplianceSecurityEventsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkApplianceSecurityEventsSortOrderEnum string

const (
	GetNetworkApplianceSecurityEventsSortOrderEnumAscending  GetNetworkApplianceSecurityEventsSortOrderEnum = "ascending"
	GetNetworkApplianceSecurityEventsSortOrderEnumDescending GetNetworkApplianceSecurityEventsSortOrderEnum = "descending"
)

type GetNetworkApplianceSecurityEventsQueryParams struct {
	EndingBefore  *string                                         `queryParam:"style=form,explode=true,name=endingBefore"`
	PerPage       *int64                                          `queryParam:"style=form,explode=true,name=perPage"`
	SortOrder     *GetNetworkApplianceSecurityEventsSortOrderEnum `queryParam:"style=form,explode=true,name=sortOrder"`
	StartingAfter *string                                         `queryParam:"style=form,explode=true,name=startingAfter"`
	T0            *string                                         `queryParam:"style=form,explode=true,name=t0"`
	T1            *string                                         `queryParam:"style=form,explode=true,name=t1"`
	Timespan      *float32                                        `queryParam:"style=form,explode=true,name=timespan"`
}

type GetNetworkApplianceSecurityEventsRequest struct {
	PathParams  GetNetworkApplianceSecurityEventsPathParams
	QueryParams GetNetworkApplianceSecurityEventsQueryParams
}

type GetNetworkApplianceSecurityEventsResponse struct {
	ContentType                                               string
	Headers                                                   map[string][]string
	StatusCode                                                int64
	GetNetworkApplianceSecurityEvents200ApplicationJSONObject map[string]interface{}
}
