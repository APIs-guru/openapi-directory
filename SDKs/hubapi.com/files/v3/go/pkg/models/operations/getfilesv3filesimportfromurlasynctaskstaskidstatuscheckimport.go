package operations

import (
"openapi/pkg/models/shared")

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams struct {
    TaskID string `pathParam:"style=simple,explode=false,name=taskId"`
    
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption3 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity struct {
    Option1 *GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption1 `security:"option"`
    Option2 *GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption2 `security:"option"`
    Option3 *GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurityOption3 `security:"option"`
    
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportRequest struct {
    PathParams GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportPathParams 
    Security GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportSecurity 
    
}

type GetFilesV3FilesImportFromURLAsyncTasksTaskIDStatusCheckImportResponse struct {
    Body []byte 
    ContentType string 
    FileActionResponse *shared.FileActionResponse 
    StatusCode int64 
    
}

