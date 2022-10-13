package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentSourceSectionJSONSourceEnum string

const (
	GetContentSourceSectionJSONSourceEnumAll GetContentSourceSectionJSONSourceEnum = "all"
	GetContentSourceSectionJSONSourceEnumNyt GetContentSourceSectionJSONSourceEnum = "nyt"
	GetContentSourceSectionJSONSourceEnumIht GetContentSourceSectionJSONSourceEnum = "iht"
)

type GetContentSourceSectionJSONPathParams struct {
	Section string                                `pathParam:"style=simple,explode=false,name=section"`
	Source  GetContentSourceSectionJSONSourceEnum `pathParam:"style=simple,explode=false,name=source"`
}

type GetContentSourceSectionJSONQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetContentSourceSectionJSONRequest struct {
	PathParams  GetContentSourceSectionJSONPathParams
	QueryParams GetContentSourceSectionJSONQueryParams
}

type GetContentSourceSectionJSON200ApplicationJSON struct {
	Copyright  *string          `json:"copyright"`
	NumResults *int64           `json:"num_results"`
	Results    []shared.Article `json:"results"`
	Status     *string          `json:"status"`
}

type GetContentSourceSectionJSONResponse struct {
	ContentType                                         string
	GetContentSourceSectionJSON200ApplicationJSONObject *GetContentSourceSectionJSON200ApplicationJSON
	StatusCode                                          int64
}
