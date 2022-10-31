package operations

import (
"openapi/pkg/models/shared")

type GetPathParams struct {
    ChapterNumber int32 `pathParam:"style=simple,explode=false,name=chapterNumber"`
    
}

type GetRequest struct {
    PathParams GetPathParams 
    
}

type GetResponse struct {
    Body []byte 
    ContentType string 
    ErskineMayChapterOverview *shared.ErskineMayChapterOverview 
    StatusCode int64 
    
}

