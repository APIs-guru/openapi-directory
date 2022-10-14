package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedIssuesQueryParams struct {
	Page     *int64 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetManagedIssuesSecurityOption1 struct {
	PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
}

type GetManagedIssuesSecurityOption2 struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetManagedIssuesSecurity struct {
	Option1 *GetManagedIssuesSecurityOption1 `security:"option"`
	Option2 *GetManagedIssuesSecurityOption2 `security:"option"`
}

type GetManagedIssuesRequest struct {
	QueryParams GetManagedIssuesQueryParams
	Security    GetManagedIssuesSecurity
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

type GetManagedIssuesResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetManagedIssues200ApplicationJSONObject     *GetManagedIssues200ApplicationJSON
	GetManagedIssuesDefaultApplicationJSONObject *GetManagedIssuesDefaultApplicationJSON
}
