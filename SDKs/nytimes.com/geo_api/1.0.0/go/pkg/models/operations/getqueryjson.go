package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryJSONQueryParams struct {
	DateRange *string `queryParam:"style=form,explode=true,name=date_range"`
	Elevation *int64  `queryParam:"style=form,explode=true,name=elevation"`
	Facets    *int64  `queryParam:"style=form,explode=true,name=facets"`
	Filter    *string `queryParam:"style=form,explode=true,name=filter"`
	Latitude  *string `queryParam:"style=form,explode=true,name=latitude"`
	Limit     *int64  `queryParam:"style=form,explode=true,name=limit"`
	Longitude *string `queryParam:"style=form,explode=true,name=longitude"`
	Name      *string `queryParam:"style=form,explode=true,name=name"`
	Offset    *int64  `queryParam:"style=form,explode=true,name=offset"`
	Query     *string `queryParam:"style=form,explode=true,name=query"`
	Sort      *string `queryParam:"style=form,explode=true,name=sort"`
	Sw        *string `queryParam:"style=form,explode=true,name=sw"`
}

type GetQueryJSON200ApplicationJSON struct {
	Results []shared.Event `json:"results,omitempty"`
}

type GetQueryJSONRequest struct {
	QueryParams GetQueryJSONQueryParams
}

type GetQueryJSONResponse struct {
	ContentType                          string
	GetQueryJSON200ApplicationJSONObject *GetQueryJSON200ApplicationJSON
	StatusCode                           int64
}
