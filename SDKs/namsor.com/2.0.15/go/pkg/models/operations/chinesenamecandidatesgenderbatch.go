package operations

import (
"openapi/pkg/models/shared")

type ChineseNameCandidatesGenderBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ChineseNameCandidatesGenderBatchRequest struct {
    Request *shared.BatchFirstLastNameGenderIn `request:"mediaType=application/json"`
    Security ChineseNameCandidatesGenderBatchSecurity 
    
}

type ChineseNameCandidatesGenderBatchResponse struct {
    BatchNameMatchCandidatesOut *shared.BatchNameMatchCandidatesOut 
    ContentType string 
    StatusCode int64 
    
}

