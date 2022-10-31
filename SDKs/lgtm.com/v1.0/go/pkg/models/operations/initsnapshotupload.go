package operations

import (
"time"
"openapi/pkg/models/shared")

type InitSnapshotUploadPathParams struct {
    Language string `pathParam:"style=simple,explode=false,name=language"`
    ProjectID int64 `pathParam:"style=simple,explode=false,name=project-id"`
    
}

type InitSnapshotUploadQueryParams struct {
    Commit string `queryParam:"style=form,explode=true,name=commit"`
    Date *time.Time `queryParam:"style=form,explode=true,name=date"`
    
}

type InitSnapshotUploadSecurity struct {
    AccessToken shared.SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
    
}

type InitSnapshotUploadRequest struct {
    PathParams InitSnapshotUploadPathParams 
    QueryParams InitSnapshotUploadQueryParams 
    Security InitSnapshotUploadSecurity 
    
}

type InitSnapshotUploadResponse struct {
    ContentType string 
    StatusCode int64 
    UploadSession *shared.UploadSession 
    
}

