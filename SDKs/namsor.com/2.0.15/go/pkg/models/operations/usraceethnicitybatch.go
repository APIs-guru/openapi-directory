package operations

import (
"openapi/pkg/models/shared")

type UsRaceEthnicityBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsRaceEthnicityBatchRequest struct {
    Request *shared.BatchFirstLastNameGeoIn `request:"mediaType=application/json"`
    Security UsRaceEthnicityBatchSecurity 
    
}

type UsRaceEthnicityBatchResponse struct {
    BatchFirstLastNameUsRaceEthnicityOut *shared.BatchFirstLastNameUsRaceEthnicityOut 
    ContentType string 
    StatusCode int64 
    
}

