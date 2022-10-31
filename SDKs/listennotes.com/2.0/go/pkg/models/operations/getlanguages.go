package operations

import (
"openapi/pkg/models/shared")

type GetLanguagesHeaders struct {
    XListenAPIKey string `header:"style=simple,explode=false,name=X-ListenAPI-Key"`
    
}

type GetLanguagesRequest struct {
    Headers GetLanguagesHeaders 
    
}

type GetLanguagesResponse struct {
    ContentType string 
    GetLanguagesResponse *shared.GetLanguagesResponse 
    Headers map[string][]string 
    StatusCode int64 
    
}

