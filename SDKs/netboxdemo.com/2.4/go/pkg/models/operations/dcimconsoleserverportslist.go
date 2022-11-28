package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortsListQueryParams struct {
	Device   *string `queryParam:"style=form,explode=true,name=device"`
	DeviceID *string `queryParam:"style=form,explode=true,name=device_id"`
	Limit    *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name     *string `queryParam:"style=form,explode=true,name=name"`
	Offset   *int64  `queryParam:"style=form,explode=true,name=offset"`
	Tag      *string `queryParam:"style=form,explode=true,name=tag"`
}

type DcimConsoleServerPortsList200ApplicationJSON struct {
	Count    int64                      `json:"count"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
	Results  []shared.ConsoleServerPort `json:"results"`
}

type DcimConsoleServerPortsListRequest struct {
	QueryParams DcimConsoleServerPortsListQueryParams
}

type DcimConsoleServerPortsListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DcimConsoleServerPortsList200ApplicationJSONObject *DcimConsoleServerPortsList200ApplicationJSON
}
