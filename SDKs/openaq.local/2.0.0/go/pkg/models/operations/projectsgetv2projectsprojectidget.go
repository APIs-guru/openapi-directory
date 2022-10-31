package operations

import (
	"openapi/pkg/models/shared"
)

type ProjectsGetV2ProjectsProjectIDGetPathParams struct {
	ProjectID int64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type ProjectsGetV2ProjectsProjectIDGetQueryParams struct {
	Country     []string                  `queryParam:"style=form,explode=true,name=country"`
	CountryID   *string                   `queryParam:"style=form,explode=true,name=country_id"`
	Entity      *string                   `queryParam:"style=form,explode=true,name=entity"`
	IsAnalysis  *bool                     `queryParam:"style=form,explode=true,name=isAnalysis"`
	IsMobile    *bool                     `queryParam:"style=form,explode=true,name=isMobile"`
	Limit       *int64                    `queryParam:"style=form,explode=true,name=limit"`
	Offset      *int64                    `queryParam:"style=form,explode=true,name=offset"`
	OrderBy     *shared.ProjectsOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
	Page        *int64                    `queryParam:"style=form,explode=true,name=page"`
	Parameter   []interface{}             `queryParam:"style=form,explode=true,name=parameter"`
	ParameterID *int64                    `queryParam:"style=form,explode=true,name=parameter_id"`
	Project     []interface{}             `queryParam:"style=form,explode=true,name=project"`
	SensorType  *string                   `queryParam:"style=form,explode=true,name=sensorType"`
	Sort        *shared.SortEnum          `queryParam:"style=form,explode=true,name=sort"`
	SourceName  []string                  `queryParam:"style=form,explode=true,name=sourceName"`
	Unit        []string                  `queryParam:"style=form,explode=true,name=unit"`
}

type ProjectsGetV2ProjectsProjectIDGetRequest struct {
	PathParams  ProjectsGetV2ProjectsProjectIDGetPathParams
	QueryParams ProjectsGetV2ProjectsProjectIDGetQueryParams
}

type ProjectsGetV2ProjectsProjectIDGetResponse struct {
	ContentType          string
	HTTPValidationError  *shared.HTTPValidationError
	OpenAqProjectsResult *shared.OpenAqProjectsResult
	StatusCode           int64
}
