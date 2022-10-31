package operations

import (
	"openapi/pkg/models/shared"
)

type DcimInterfaceTemplatesListQueryParams struct {
	DevicetypeID *string `queryParam:"style=form,explode=true,name=devicetype_id"`
	FormFactor   *string `queryParam:"style=form,explode=true,name=form_factor"`
	Limit        *int64  `queryParam:"style=form,explode=true,name=limit"`
	MgmtOnly     *string `queryParam:"style=form,explode=true,name=mgmt_only"`
	Name         *string `queryParam:"style=form,explode=true,name=name"`
	Offset       *int64  `queryParam:"style=form,explode=true,name=offset"`
}

type DcimInterfaceTemplatesListRequest struct {
	QueryParams DcimInterfaceTemplatesListQueryParams
}

type DcimInterfaceTemplatesList200ApplicationJSON struct {
	Count    int64                      `json:"count"`
	Next     *string                    `json:"next,omitempty"`
	Previous *string                    `json:"previous,omitempty"`
	Results  []shared.InterfaceTemplate `json:"results"`
}

type DcimInterfaceTemplatesListResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	DcimInterfaceTemplatesList200ApplicationJSONObject *DcimInterfaceTemplatesList200ApplicationJSON
}
