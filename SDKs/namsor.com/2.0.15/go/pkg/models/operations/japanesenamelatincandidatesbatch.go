package operations

import (
"openapi/pkg/models/shared")

type JapaneseNameLatinCandidatesBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type JapaneseNameLatinCandidatesBatchRequest struct {
    Request *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
    Security JapaneseNameLatinCandidatesBatchSecurity 
    
}

type JapaneseNameLatinCandidatesBatchResponse struct {
    BatchNameMatchCandidatesOut *shared.BatchNameMatchCandidatesOut 
    ContentType string 
    StatusCode int64 
    
}

