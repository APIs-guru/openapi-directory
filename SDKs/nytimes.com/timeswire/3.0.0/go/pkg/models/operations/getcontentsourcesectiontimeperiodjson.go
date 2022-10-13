package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentSourceSectionTimePeriodJSONSourceEnum string

const (
	GetContentSourceSectionTimePeriodJSONSourceEnumAll GetContentSourceSectionTimePeriodJSONSourceEnum = "all"
	GetContentSourceSectionTimePeriodJSONSourceEnumNyt GetContentSourceSectionTimePeriodJSONSourceEnum = "nyt"
	GetContentSourceSectionTimePeriodJSONSourceEnumIht GetContentSourceSectionTimePeriodJSONSourceEnum = "iht"
)

type GetContentSourceSectionTimePeriodJSONPathParams struct {
	Section    string                                          `pathParam:"style=simple,explode=false,name=section"`
	Source     GetContentSourceSectionTimePeriodJSONSourceEnum `pathParam:"style=simple,explode=false,name=source"`
	TimePeriod int64                                           `pathParam:"style=simple,explode=false,name=time-period"`
}

type GetContentSourceSectionTimePeriodJSONQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetContentSourceSectionTimePeriodJSONRequest struct {
	PathParams  GetContentSourceSectionTimePeriodJSONPathParams
	QueryParams GetContentSourceSectionTimePeriodJSONQueryParams
}

type GetContentSourceSectionTimePeriodJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright"`
	NumResults *int64           `json:"num_results"`
	Results    []shared.Article `json:"results"`
	Status     *string          `json:"status"`
}

type GetContentSourceSectionTimePeriodJSONResponse struct {
	ContentType                                                   string
	GetContentSourceSectionTimePeriodJSON200ApplicationJSONObject *GetContentSourceSectionTimePeriodJSON200ApplicationJSON
	StatusCode                                                    int64
}
