package operations

import (
"openapi/pkg/models/shared")

type GenderChineseNamePathParams struct {
    ChineseName string `pathParam:"style=simple,explode=false,name=chineseName"`
    
}

type GenderChineseNameSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GenderChineseNameRequest struct {
    PathParams GenderChineseNamePathParams 
    Security GenderChineseNameSecurity 
    
}

type GenderChineseNameResponse struct {
    ContentType string 
    PersonalNameGenderedOut *shared.PersonalNameGenderedOut 
    StatusCode int64 
    
}

