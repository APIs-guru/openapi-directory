package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasRecentActivityListQueryParams struct {
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	User     *string `queryParam:"style=form,explode=true,name=user"`
	Username *string `queryParam:"style=form,explode=true,name=username"`
}

type ExtrasRecentActivityList200ApplicationJSON struct {
	Count    int64               `json:"count"`
	Next     *string             `json:"next,omitempty"`
	Previous *string             `json:"previous,omitempty"`
	Results  []shared.UserAction `json:"results"`
}

type ExtrasRecentActivityListRequest struct {
	QueryParams ExtrasRecentActivityListQueryParams
}

type ExtrasRecentActivityListResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ExtrasRecentActivityList200ApplicationJSONObject *ExtrasRecentActivityList200ApplicationJSON
}
