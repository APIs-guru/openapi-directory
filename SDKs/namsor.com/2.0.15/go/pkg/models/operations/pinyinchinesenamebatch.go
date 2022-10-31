package operations

import (
"openapi/pkg/models/shared")

type PinyinChineseNameBatchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PinyinChineseNameBatchRequest struct {
    Request *shared.BatchPersonalNameIn `request:"mediaType=application/json"`
    Security PinyinChineseNameBatchSecurity 
    
}

type PinyinChineseNameBatchResponse struct {
    BatchPersonalNameParsedOut *shared.BatchPersonalNameParsedOut 
    ContentType string 
    StatusCode int64 
    
}

