package operations

import (
"openapi/pkg/models/shared")

type ChineseNameCandidatesPathParams struct {
    ChineseGivenNameLatin string `pathParam:"style=simple,explode=false,name=chineseGivenNameLatin"`
    ChineseSurnameLatin string `pathParam:"style=simple,explode=false,name=chineseSurnameLatin"`
    
}

type ChineseNameCandidatesSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ChineseNameCandidatesRequest struct {
    PathParams ChineseNameCandidatesPathParams 
    Security ChineseNameCandidatesSecurity 
    
}

type ChineseNameCandidatesResponse struct {
    ContentType string 
    NameMatchCandidatesOut *shared.NameMatchCandidatesOut 
    StatusCode int64 
    
}

