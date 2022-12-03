package operations

import (
	"openapi/pkg/models/shared"
)

type GetClassificationsQueryParams struct {
	Limit     *float64 `queryParam:"style=form,explode=true,name=limit"`
	Naics2017 *string  `queryParam:"style=form,explode=true,name=naics_2017"`
	Page      *float64 `queryParam:"style=form,explode=true,name=page"`
	Search    *string  `queryParam:"style=form,explode=true,name=search"`
}

type GetClassifications200ApplicationJSON struct {
	Classifications []shared.ClassificationV1 `json:"classifications,omitempty"`
}

type GetClassifications400ApplicationJSON struct {
	Errors []shared.ErrorV1 `json:"errors,omitempty"`
}

type GetClassificationsRequest struct {
	QueryParams GetClassificationsQueryParams
}

type GetClassificationsResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetClassifications200ApplicationJSONObject *GetClassifications200ApplicationJSON
	GetClassifications400ApplicationJSONObject *GetClassifications400ApplicationJSON
}
