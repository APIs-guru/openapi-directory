package operations

import (
"openapi/pkg/models/shared")

type GenderChineseNamePinyinPathParams struct {
    ChineseGivenNameLatin string `pathParam:"style=simple,explode=false,name=chineseGivenNameLatin"`
    ChineseSurnameLatin string `pathParam:"style=simple,explode=false,name=chineseSurnameLatin"`
    
}

type GenderChineseNamePinyinSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GenderChineseNamePinyinRequest struct {
    PathParams GenderChineseNamePinyinPathParams 
    Security GenderChineseNamePinyinSecurity 
    
}

type GenderChineseNamePinyinResponse struct {
    ContentType string 
    FirstLastNameGenderedOut *shared.FirstLastNameGenderedOut 
    StatusCode int64 
    
}

