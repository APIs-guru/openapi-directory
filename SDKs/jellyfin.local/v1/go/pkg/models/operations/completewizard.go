package operations

import (
"openapi/pkg/models/shared")

type CompleteWizardSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CompleteWizardRequest struct {
    Security CompleteWizardSecurity 
    
}

type CompleteWizardResponse struct {
    ContentType string 
    StatusCode int64 
    
}

