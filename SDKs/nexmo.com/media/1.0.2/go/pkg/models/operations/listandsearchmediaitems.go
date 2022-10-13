package operations

import (
	"openapi/pkg/models/shared"
)

type ListAndSearchMediaItemsOrderEnum string

const (
	ListAndSearchMediaItemsOrderEnumAscending  ListAndSearchMediaItemsOrderEnum = "ascending"
	ListAndSearchMediaItemsOrderEnumDescending ListAndSearchMediaItemsOrderEnum = "descending"
)

type ListAndSearchMediaItemsQueryParams struct {
	EndTime   *string                           `queryParam:"style=form,explode=true,name=end_time"`
	Order     *ListAndSearchMediaItemsOrderEnum `queryParam:"style=form,explode=true,name=order"`
	PageIndex *int64                            `queryParam:"style=form,explode=true,name=page_index"`
	PageSize  *int64                            `queryParam:"style=form,explode=true,name=page_size"`
	StartTime *string                           `queryParam:"style=form,explode=true,name=start_time"`
}

type ListAndSearchMediaItemsRequest struct {
	QueryParams ListAndSearchMediaItemsQueryParams
}

type ListAndSearchMediaItems200ApplicationJSONEmbedded struct {
	Media []shared.Media `json:"media"`
}

type ListAndSearchMediaItems200ApplicationJSONLinksFirst struct {
	Href *string `json:"href"`
}

type ListAndSearchMediaItems200ApplicationJSONLinksLast struct {
	Href *string `json:"href"`
}

type ListAndSearchMediaItems200ApplicationJSONLinksSelf struct {
	Href *string `json:"href"`
}

type ListAndSearchMediaItems200ApplicationJSONLinks struct {
	First *ListAndSearchMediaItems200ApplicationJSONLinksFirst `json:"first"`
	Last  *ListAndSearchMediaItems200ApplicationJSONLinksLast  `json:"last"`
	Self  *ListAndSearchMediaItems200ApplicationJSONLinksSelf  `json:"self"`
}

type ListAndSearchMediaItems200ApplicationJSON struct {
	Embedded  *ListAndSearchMediaItems200ApplicationJSONEmbedded `json:"_embedded"`
	Links     *ListAndSearchMediaItems200ApplicationJSONLinks    `json:"_links"`
	Count     *int64                                             `json:"count"`
	PageIndex *int64                                             `json:"page_index"`
	PageSize  *int64                                             `json:"page_size"`
}

type ListAndSearchMediaItemsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ListAndSearchMediaItems200ApplicationJSONObject *ListAndSearchMediaItems200ApplicationJSON
}
