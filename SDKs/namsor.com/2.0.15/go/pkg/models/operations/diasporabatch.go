package operations

import (
"openapi/pkg/models/shared")

type DiasporaBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type DiasporaBatchRequest struct {
    Request *shared.BatchFirstLastNameGeoIn `request:"mediaType=application/json"`
    Security DiasporaBatchSecurity 
    
}

type DiasporaBatchResponse struct {
    BatchFirstLastNameDiasporaedOut *shared.BatchFirstLastNameDiasporaedOut 
    ContentType string 
    StatusCode int64 
    
}

