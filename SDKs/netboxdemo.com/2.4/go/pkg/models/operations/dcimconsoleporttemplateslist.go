package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsolePortTemplatesListQueryParams struct {
	DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type DcimConsolePortTemplatesListRequest struct {
	QueryParams DcimConsolePortTemplatesListQueryParams
}

type DcimConsolePortTemplatesList200ApplicationJSON struct {
	Count    int64                        `json:"count"`
	Next     *string                      `json:"next,omitempty"`
	Previous *string                      `json:"previous,omitempty"`
	Results  []shared.ConsolePortTemplate `json:"results"`
}

type DcimConsolePortTemplatesListResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	DcimConsolePortTemplatesList200ApplicationJSONObject *DcimConsolePortTemplatesList200ApplicationJSON
}
