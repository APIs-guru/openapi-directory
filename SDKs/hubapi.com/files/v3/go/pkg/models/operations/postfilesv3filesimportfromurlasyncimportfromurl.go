package operations

import (
"openapi/pkg/models/shared")

type PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity struct {
    Option1 *PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption1 `security:"option"`
    Option2 *PostFilesV3FilesImportFromURLAsyncImportFromURLSecurityOption2 `security:"option"`
    
}

type PostFilesV3FilesImportFromURLAsyncImportFromURLRequest struct {
    Request shared.ImportFromURLInput `request:"mediaType=application/json"`
    Security PostFilesV3FilesImportFromURLAsyncImportFromURLSecurity 
    
}

type PostFilesV3FilesImportFromURLAsyncImportFromURLResponse struct {
    Body []byte 
    ContentType string 
    ImportFromURLTaskLocator *shared.ImportFromURLTaskLocator 
    StatusCode int64 
    
}

