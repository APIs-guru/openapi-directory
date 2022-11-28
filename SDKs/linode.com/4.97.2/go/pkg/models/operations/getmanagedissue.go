package operations

import (
	"openapi/pkg/models/shared"
)

type GetManagedIssuePathParams struct {
	IssueID int64 `pathParam:"style=simple,explode=false,name=issueId"`
}

type GetManagedIssueSecurity struct {
	PersonalAccessToken *shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
	Oauth               *shared.SchemeOauth               `security:"scheme,type=oauth2"`
}

type GetManagedIssueDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetManagedIssueRequest struct {
	PathParams GetManagedIssuePathParams
	Security   GetManagedIssueSecurity
}

type GetManagedIssueResponse struct {
	ContentType                                 string
	ManagedIssue                                *shared.ManagedIssue
	StatusCode                                  int64
	GetManagedIssueDefaultApplicationJSONObject *GetManagedIssueDefaultApplicationJSON
}
