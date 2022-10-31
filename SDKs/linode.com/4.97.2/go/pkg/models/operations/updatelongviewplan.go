package operations

import (
"openapi/pkg/models/shared")

type UpdateLongviewPlanSecurityOption1 struct {
    PersonalAccessToken shared.SchemePersonalAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type UpdateLongviewPlanSecurityOption2 struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type UpdateLongviewPlanSecurity struct {
    Option1 *UpdateLongviewPlanSecurityOption1 `security:"option"`
    Option2 *UpdateLongviewPlanSecurityOption2 `security:"option"`
    
}

type UpdateLongviewPlanRequest struct {
    Request shared.LongviewPlan `request:"mediaType=application/json"`
    Security UpdateLongviewPlanSecurity 
    
}

type UpdateLongviewPlanDefaultApplicationJSON struct {
    Errors []shared.ErrorObject `json:"errors,omitempty"`
    
}

type UpdateLongviewPlanResponse struct {
    ContentType string 
    LongviewSubscription *shared.LongviewSubscription 
    StatusCode int64 
    UpdateLongviewPlanDefaultApplicationJSONObject *UpdateLongviewPlanDefaultApplicationJSON 
    
}

