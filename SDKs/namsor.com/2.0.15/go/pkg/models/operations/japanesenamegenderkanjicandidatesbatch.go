package operations

import (
"openapi/pkg/models/shared")

type JapaneseNameGenderKanjiCandidatesBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type JapaneseNameGenderKanjiCandidatesBatchRequest struct {
    Request *shared.BatchFirstLastNameGenderIn `request:"mediaType=application/json"`
    Security JapaneseNameGenderKanjiCandidatesBatchSecurity 
    
}

type JapaneseNameGenderKanjiCandidatesBatchResponse struct {
    BatchNameMatchCandidatesOut *shared.BatchNameMatchCandidatesOut 
    ContentType string 
    StatusCode int64 
    
}

