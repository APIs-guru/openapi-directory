package operations

import (
"openapi/pkg/models/shared")

type GenderFullGeoBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GenderFullGeoBatchRequest struct {
    Request *shared.BatchPersonalNameGeoIn `request:"mediaType=application/json"`
    Security GenderFullGeoBatchSecurity 
    
}

type GenderFullGeoBatchResponse struct {
    BatchPersonalNameGenderedOut *shared.BatchPersonalNameGenderedOut 
    ContentType string 
    StatusCode int64 
    
}

