package operations

import (
"openapi/pkg/models/shared")

type ScreenshotsPathParams struct {
    TestID string `pathParam:"style=simple,explode=false,name=test_id"`
    
}

type ScreenshotsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ScreenshotsRequest struct {
    PathParams ScreenshotsPathParams 
    Security ScreenshotsSecurity 
    
}

type ScreenshotsResponse struct {
    AccessDenied *interface{} 
    ContentType string 
    Forbidden *interface{} 
    StatusCode int64 
    ScreenshotDetails *shared.ScreenshotDetails 
    ScreenshotNotFound *interface{} 
    
}

