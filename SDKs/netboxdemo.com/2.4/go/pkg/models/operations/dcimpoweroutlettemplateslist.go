package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerOutletTemplatesListQueryParams struct {
	DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type DcimPowerOutletTemplatesList200ApplicationJSON struct {
	Count    int64                        `json:"count"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
	Results  []shared.PowerOutletTemplate `json:"results"`
}

type DcimPowerOutletTemplatesListRequest struct {
	QueryParams DcimPowerOutletTemplatesListQueryParams
}

type DcimPowerOutletTemplatesListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	DcimPowerOutletTemplatesList200ApplicationJSONObject *DcimPowerOutletTemplatesList200ApplicationJSON
}
