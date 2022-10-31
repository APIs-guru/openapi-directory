package operations

import (
"openapi/pkg/models/shared")

type JapaneseNameKanjiCandidates1PathParams struct {
    JapaneseGivenNameLatin string `pathParam:"style=simple,explode=false,name=japaneseGivenNameLatin"`
    JapaneseSurnameLatin string `pathParam:"style=simple,explode=false,name=japaneseSurnameLatin"`
    
}

type JapaneseNameKanjiCandidates1Security struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type JapaneseNameKanjiCandidates1Request struct {
    PathParams JapaneseNameKanjiCandidates1PathParams 
    Security JapaneseNameKanjiCandidates1Security 
    
}

type JapaneseNameKanjiCandidates1Response struct {
    ContentType string 
    NameMatchCandidatesOut *shared.NameMatchCandidatesOut 
    StatusCode int64 
    
}

