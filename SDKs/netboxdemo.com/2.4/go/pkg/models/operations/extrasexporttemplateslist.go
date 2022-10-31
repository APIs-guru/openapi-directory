package operations

import (
	"openapi/pkg/models/shared"
)

type ExtrasExportTemplatesListQueryParams struct {
	ContentType *string `queryParam:"style=form,explode=true,name=content_type"`
	Limit       *int64  `queryParam:"style=form,explode=true,name=limit"`
	Name        *string `queryParam:"style=form,explode=true,name=name"`
	Offset      *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type ExtrasExportTemplatesListRequest struct {
	QueryParams ExtrasExportTemplatesListQueryParams
}

type ExtrasExportTemplatesList200ApplicationJSON struct {
	Count    int64                   `json:"count"`
	Next     *string                 `json:"next,omitempty"`
	Previous *string                 `json:"previous,omitempty"`
	Results  []shared.ExportTemplate `json:"results"`
}

type ExtrasExportTemplatesListResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	ExtrasExportTemplatesList200ApplicationJSONObject *ExtrasExportTemplatesList200ApplicationJSON
}
