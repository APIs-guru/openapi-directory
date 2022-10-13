package operations

import (
	"openapi/pkg/models/shared"
)

type DcimPowerPortTemplatesListQueryParams struct {
	DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type DcimPowerPortTemplatesListRequest struct {
	QueryParams DcimPowerPortTemplatesListQueryParams
}

type DcimPowerPortTemplatesList200ApplicationJSON struct {
	Count    int64                      `json:"count"`
	Next     *string                    `json:"next"`
	Previous *string                    `json:"previous"`
	Results  []shared.PowerPortTemplate `json:"results"`
}

type DcimPowerPortTemplatesListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DcimPowerPortTemplatesList200ApplicationJSONObject *DcimPowerPortTemplatesList200ApplicationJSON
}
