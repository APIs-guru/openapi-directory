package operations

import (
"openapi/pkg/models/shared")

type ChineseNameGenderCandidatesPathParams struct {
    ChineseGivenNameLatin string `pathParam:"style=simple,explode=false,name=chineseGivenNameLatin"`
    ChineseSurnameLatin string `pathParam:"style=simple,explode=false,name=chineseSurnameLatin"`
    KnownGender string `pathParam:"style=simple,explode=false,name=knownGender"`
    
}

type ChineseNameGenderCandidatesSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ChineseNameGenderCandidatesRequest struct {
    PathParams ChineseNameGenderCandidatesPathParams 
    Security ChineseNameGenderCandidatesSecurity 
    
}

type ChineseNameGenderCandidatesResponse struct {
    ContentType string 
    NameMatchCandidatesOut *shared.NameMatchCandidatesOut 
    StatusCode int64 
    
}

