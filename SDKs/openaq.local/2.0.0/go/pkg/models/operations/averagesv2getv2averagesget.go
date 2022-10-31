package operations

import (
	"openapi/pkg/models/shared"
)

type AveragesV2GetV2AveragesGetQueryParams struct {
	Country     []string            `queryParam:"style=form,explode=true,name=country"`
	CountryID   *string             `queryParam:"style=form,explode=true,name=country_id"`
	DateFrom    *interface{}        `queryParam:"style=form,explode=true,name=date_from"`
	DateTo      *interface{}        `queryParam:"style=form,explode=true,name=date_to"`
	Group       *bool               `queryParam:"style=form,explode=true,name=group"`
	Limit       *int64              `queryParam:"style=form,explode=true,name=limit"`
	Location    []string            `queryParam:"style=form,explode=true,name=location"`
	Offset      *int64              `queryParam:"style=form,explode=true,name=offset"`
	Page        *int64              `queryParam:"style=form,explode=true,name=page"`
	Parameter   []interface{}       `queryParam:"style=form,explode=true,name=parameter"`
	ParameterID *int64              `queryParam:"style=form,explode=true,name=parameter_id"`
	Project     []interface{}       `queryParam:"style=form,explode=true,name=project"`
	ProjectID   *int64              `queryParam:"style=form,explode=true,name=project_id"`
	Sort        *shared.SortEnum    `queryParam:"style=form,explode=true,name=sort"`
	Spatial     shared.SpatialEnum  `queryParam:"style=form,explode=true,name=spatial"`
	Temporal    shared.TemporalEnum `queryParam:"style=form,explode=true,name=temporal"`
	Unit        []string            `queryParam:"style=form,explode=true,name=unit"`
}

type AveragesV2GetV2AveragesGetRequest struct {
	QueryParams AveragesV2GetV2AveragesGetQueryParams
}

type AveragesV2GetV2AveragesGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	OpenAqResult        *shared.OpenAqResult
	StatusCode          int64
}
