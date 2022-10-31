package operations

import (
"openapi/pkg/models/shared")

type GenderChineseNamePinyinBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GenderChineseNamePinyinBatchRequest struct {
    Request *shared.BatchFirstLastNameIn `request:"mediaType=application/json"`
    Security GenderChineseNamePinyinBatchSecurity 
    
}

type GenderChineseNamePinyinBatchResponse struct {
    BatchFirstLastNameGenderedOut *shared.BatchFirstLastNameGenderedOut 
    ContentType string 
    StatusCode int64 
    
}

