package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBaysListQueryParams struct {
	Device   *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Tag      *string `queryParam:"style=form,explode=true,name=tag"`
}

type DcimDeviceBaysList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next,omitempty"`
	Previous *string            `json:"previous,omitempty"`
	Results  []shared.DeviceBay `json:"results"`
}

type DcimDeviceBaysListRequest struct {
	QueryParams DcimDeviceBaysListQueryParams
}

type DcimDeviceBaysListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DcimDeviceBaysList200ApplicationJSONObject *DcimDeviceBaysList200ApplicationJSON
}
