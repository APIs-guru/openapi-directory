package operations

import (
"openapi/pkg/models/shared")

type UsZipRaceEthnicityBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type UsZipRaceEthnicityBatchRequest struct {
    Request *shared.BatchFirstLastNameGeoZippedIn `request:"mediaType=application/json"`
    Security UsZipRaceEthnicityBatchSecurity 
    
}

type UsZipRaceEthnicityBatchResponse struct {
    BatchFirstLastNameUsRaceEthnicityOut *shared.BatchFirstLastNameUsRaceEthnicityOut 
    ContentType string 
    StatusCode int64 
    
}

