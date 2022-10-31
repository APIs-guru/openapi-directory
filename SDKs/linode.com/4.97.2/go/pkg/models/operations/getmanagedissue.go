package operations

import (
"openapi/pkg/models/shared")

type GetManagedIssuePathParams struct {
    IssueID int64 `pathParam:"style=simple,explode=false,name=issueId"`
    
}

type GetManagedIssueSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetManagedIssueSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetManagedIssueSecurity struct {
    Option1 *GetManagedIssueSecurityOption1 `security:"option"`
    Option2 *GetManagedIssueSecurityOption2 `security:"option"`
    
}

type GetManagedIssueRequest struct {
    PathParams GetManagedIssuePathParams 
    Security GetManagedIssueSecurity 
    
}

type GetManagedIssueDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetManagedIssueResponse struct {
    ContentType string 
    ManagedIssue *shared.ManagedIssue 
    StatusCode int64 
    GetManagedIssueDefaultApplicationJSONObject *GetManagedIssueDefaultApplicationJSON 
    
}

