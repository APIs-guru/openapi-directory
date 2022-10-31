package operations

import (
"openapi/pkg/models/shared")

type PostFilesV3FoldersCreateSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type PostFilesV3FoldersCreateSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type PostFilesV3FoldersCreateSecurity struct {
    Option1 *PostFilesV3FoldersCreateSecurityOption1 `security:"option"`
    Option2 *PostFilesV3FoldersCreateSecurityOption2 `security:"option"`
    
}

type PostFilesV3FoldersCreateRequest struct {
    Request shared.FolderInput `request:"mediaType=application/json"`
    Security PostFilesV3FoldersCreateSecurity 
    
}

type PostFilesV3FoldersCreateResponse struct {
    Body []byte 
    ContentType string 
    Folder *shared.Folder 
    StatusCode int64 
    
}

