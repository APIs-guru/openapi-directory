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

// ListAndSearchMediaItems200ApplicationJSONEmbedded
// A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields
type ListAndSearchMediaItems200ApplicationJSONEmbedded struct {
	Media []shared.Media `json:"media,omitempty"`
}

type ListAndSearchMediaItems200ApplicationJSONLinksFirst struct {
	Href *string `json:"href,omitempty"`
}

type ListAndSearchMediaItems200ApplicationJSONLinksLast struct {
	Href *string `json:"href,omitempty"`
}

type ListAndSearchMediaItems200ApplicationJSONLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type ListAndSearchMediaItems200ApplicationJSONLinks struct {
	First *ListAndSearchMediaItems200ApplicationJSONLinksFirst `json:"first,omitempty"`
	Last  *ListAndSearchMediaItems200ApplicationJSONLinksLast  `json:"last,omitempty"`
	Self  *ListAndSearchMediaItems200ApplicationJSONLinksSelf  `json:"self,omitempty"`
}

type ListAndSearchMediaItems200ApplicationJSON struct {
	Embedded  *ListAndSearchMediaItems200ApplicationJSONEmbedded `json:"_embedded,omitempty"`
	Links     *ListAndSearchMediaItems200ApplicationJSONLinks    `json:"_links,omitempty"`
	Count     *int64                                             `json:"count,omitempty"`
	PageIndex *int64                                             `json:"page_index,omitempty"`
	PageSize  *int64                                             `json:"page_size,omitempty"`
}

type ListAndSearchMediaItemsRequest struct {
	QueryParams ListAndSearchMediaItemsQueryParams
}

type ListAndSearchMediaItemsResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	ListAndSearchMediaItems200ApplicationJSONObject *ListAndSearchMediaItems200ApplicationJSON
}
