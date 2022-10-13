package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortsListQueryParams struct {
	Device   *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Tag      *string `queryParam:"style=form,explode=true,name=tag"`
}

type DcimPowerPortsListRequest struct {
	QueryParams DcimPowerPortsListQueryParams
}

type DcimPowerPortsList200ApplicationJSON struct {
	Count    int64              `json:"count"`
	Next     *string            `json:"next"`
	Previous *string            `json:"previous"`
	Results  []shared.PowerPort `json:"results"`
}

type DcimPowerPortsListResponse struct {
	ContentType                                string
	StatusCode                                 int64
	DcimPowerPortsList200ApplicationJSONObject *DcimPowerPortsList200ApplicationJSON
}
