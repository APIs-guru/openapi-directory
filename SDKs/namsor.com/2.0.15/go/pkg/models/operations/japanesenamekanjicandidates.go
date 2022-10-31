package operations

import (
"openapi/pkg/models/shared")

type JapaneseNameKanjiCandidatesPathParams struct {
    JapaneseGivenNameLatin string `pathParam:"style=simple,explode=false,name=japaneseGivenNameLatin"`
    JapaneseSurnameLatin string `pathParam:"style=simple,explode=false,name=japaneseSurnameLatin"`
    KnownGender string `pathParam:"style=simple,explode=false,name=knownGender"`
    
}

type JapaneseNameKanjiCandidatesSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type JapaneseNameKanjiCandidatesRequest struct {
    PathParams JapaneseNameKanjiCandidatesPathParams 
    Security JapaneseNameKanjiCandidatesSecurity 
    
}

type JapaneseNameKanjiCandidatesResponse struct {
    ContentType string 
    NameMatchCandidatesOut *shared.NameMatchCandidatesOut 
    StatusCode int64 
    
}

