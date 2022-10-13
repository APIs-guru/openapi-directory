package operations

import (
	"openapi/pkg/models/shared"
)

type DcimDeviceBayTemplatesListQueryParams struct {
	DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type DcimDeviceBayTemplatesListRequest struct {
	QueryParams DcimDeviceBayTemplatesListQueryParams
}

type DcimDeviceBayTemplatesList200ApplicationJSON struct {
	Count    int64                      `json:"count"`
	Next     *string                    `json:"next"`
	Previous *string                    `json:"previous"`
	Results  []shared.DeviceBayTemplate `json:"results"`
}

type DcimDeviceBayTemplatesListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DcimDeviceBayTemplatesList200ApplicationJSONObject *DcimDeviceBayTemplatesList200ApplicationJSON
}
