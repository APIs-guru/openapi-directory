package operations

import (
"openapi/pkg/models/shared")

type NameTypeGeoBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type NameTypeGeoBatchRequest struct {
    Request *shared.BatchNameGeoIn `request:"mediaType=application/json"`
    Security NameTypeGeoBatchSecurity 
    
}

type NameTypeGeoBatchResponse struct {
    BatchProperNounCategorizedOut *shared.BatchProperNounCategorizedOut 
    ContentType string 
    StatusCode int64 
    
}

