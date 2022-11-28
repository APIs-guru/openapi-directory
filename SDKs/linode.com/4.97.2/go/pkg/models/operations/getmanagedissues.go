package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedIssuesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedIssuesSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedIssues200ApplicationJSON struct {
	Data    []shared.ManagedIssue `json:"data,omitempty"`
	Page    *int64                `json:"page,omitempty"`
	Pages   *int64                `json:"pages,omitempty"`
	Results *int64                `json:"results,omitempty"`
}

type GetManagedIssuesDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedIssuesRequest struct {
	QueryParams GetManagedIssuesQueryParams
	Security    GetManagedIssuesSecurity
}

type GetManagedIssuesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetManagedIssues200ApplicationJSONObject     *GetManagedIssues200ApplicationJSON
	GetManagedIssuesDefaultApplicationJSONObject *GetManagedIssuesDefaultApplicationJSON
}
