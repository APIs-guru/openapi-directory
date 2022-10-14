package operations

import (
	"openapi/pkg/models/shared"
)

type DcimConsoleServerPortTemplatesListQueryParams struct {
	DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type DcimConsoleServerPortTemplatesListRequest struct {
	QueryParams DcimConsoleServerPortTemplatesListQueryParams
}

type DcimConsoleServerPortTemplatesList200ApplicationJSON struct {
	Count    int64                              `json:"count"`
	Next     *string                            `json:"next,omitempty"`
	Previous *string                            `json:"previous,omitempty"`
	Results  []shared.ConsoleServerPortTemplate `json:"results"`
}

type DcimConsoleServerPortTemplatesListResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	DcimConsoleServerPortTemplatesList200ApplicationJSONObject *DcimConsoleServerPortTemplatesList200ApplicationJSON
}
