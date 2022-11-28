package operations

import (
	"openapi/pkg/models/shared"
)

type GetTagsQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetTagsSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetTags200ApplicationJSON struct {
	Data    []shared.Tag `json:"data,omitempty"`
	Page    *int64       `json:"page,omitempty"`
	Pages   *int64       `json:"pages,omitempty"`
	Results *int64       `json:"results,omitempty"`
}

type GetTagsDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetTagsRequest struct {
	QueryParams GetTagsQueryParams
	Security    GetTagsSecurity
}

type GetTagsResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetTags200ApplicationJSONObject     *GetTags200ApplicationJSON
	GetTagsDefaultApplicationJSONObject *GetTagsDefaultApplicationJSON
}
