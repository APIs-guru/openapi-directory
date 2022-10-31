package operations

import (
"openapi/pkg/models/shared")

type NameTypePathParams struct {
    ProperNoun string `pathParam:"style=simple,explode=false,name=properNoun"`
    
}

type NameTypeSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NameTypeRequest struct {
    PathParams NameTypePathParams 
    Security NameTypeSecurity 
    
}

type NameTypeResponse struct {
    ContentType string 
    ProperNounCategorizedOut *shared.ProperNounCategorizedOut 
    StatusCode int64 
    
}

