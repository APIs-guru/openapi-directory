package operations

import (
"openapi/pkg/models/shared")

type GetLongviewPlanSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type GetLongviewPlanSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetLongviewPlanSecurity struct {
    Option1 *GetLongviewPlanSecurityOption1 `security:"option"`
    Option2 *GetLongviewPlanSecurityOption2 `security:"option"`
    
}

type GetLongviewPlanRequest struct {
    Security GetLongviewPlanSecurity 
    
}

type GetLongviewPlanDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type GetLongviewPlanResponse struct {
    ContentType string 
    LongviewSubscription *shared.LongviewSubscription 
    StatusCode int64 
    GetLongviewPlanDefaultApplicationJSONObject *GetLongviewPlanDefaultApplicationJSON 
    
}

