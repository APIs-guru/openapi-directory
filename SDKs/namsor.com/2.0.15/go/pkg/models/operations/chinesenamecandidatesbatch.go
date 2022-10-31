package operations

import (
"openapi/pkg/models/shared")

type ChineseNameCandidatesBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ChineseNameCandidatesBatchRequest struct {
    Request *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
    Security ChineseNameCandidatesBatchSecurity 
    
}

type ChineseNameCandidatesBatchResponse struct {
    BatchNameMatchCandidatesOut *shared.BatchNameMatchCandidatesOut 
    ContentType string 
    StatusCode int64 
    
}

