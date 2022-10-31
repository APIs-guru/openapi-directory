package operations

import (
"openapi/pkg/models/shared")

type ReadmeGetV2SourcesReadmeSlugGetPathParams struct {
    Slug string `pathParam:"style=simple,explode=false,name=slug"`
    
}

type ReadmeGetV2SourcesReadmeSlugGetRequest struct {
    PathParams ReadmeGetV2SourcesReadmeSlugGetPathParams 
    
}

type ReadmeGetV2SourcesReadmeSlugGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    StatusCode int64 
    ReadmeGetV2SourcesReadmeSlugGet200ApplicationJSONAny *interface{} 
    
}

