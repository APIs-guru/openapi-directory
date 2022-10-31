package operations

import (
"openapi/pkg/models/shared")

type ReportSessionEndedSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type ReportSessionEndedRequest struct {
    Security ReportSessionEndedSecurity 
    
}

type ReportSessionEndedResponse struct {
    ContentType string 
    StatusCode int64 
    
}

