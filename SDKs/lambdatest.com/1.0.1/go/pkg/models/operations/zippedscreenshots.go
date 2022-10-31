package operations

import (
"openapi/pkg/models/shared")

type ZippedScreenshotsPathParams struct {
    TestID string `pathParam:"style=simple,explode=false,name=test_id"`
    
}

type ZippedScreenshotsSecurity struct {
    BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
    
}

type ZippedScreenshotsRequest struct {
    PathParams ZippedScreenshotsPathParams 
    Security ZippedScreenshotsSecurity 
    
}

type ZippedScreenshotsResponse struct {
    AccessDenied *interface{} 
    ContentType string 
    Forbidden *interface{} 
    StatusCode int64 
    ScreenshotNotFound *interface{} 
    ZippedScreenshotsSuccess *shared.ZippedScreenshotsSuccess 
    
}

