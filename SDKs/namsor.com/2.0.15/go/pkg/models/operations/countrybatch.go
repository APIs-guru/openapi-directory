package operations

import (
"openapi/pkg/models/shared")

type CountryBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type CountryBatchRequest struct {
    Request *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
    Security CountryBatchSecurity 
    
}

type CountryBatchResponse struct {
    BatchPersonalNameGeoOut *shared.BatchPersonalNameGeoOut 
    ContentType string 
    StatusCode int64 
    
}

