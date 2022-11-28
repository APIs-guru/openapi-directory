package operations

import (
	"openapi/pkg/models/shared"
)

type DcimVirtualChassisListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type DcimVirtualChassisList200ApplicationJSON struct {
	Count    int64                   `json:"count"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Results  []shared.VirtualChassis `json:"results"`
}

type DcimVirtualChassisListRequest struct {
	QueryParams DcimVirtualChassisListQueryParams
}

type DcimVirtualChassisListResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	DcimVirtualChassisList200ApplicationJSONObject *DcimVirtualChassisList200ApplicationJSON
}
