package operations

import (
"openapi/pkg/models/shared")

type DeleteFilesV3FoldersFolderPathArchiveByPathPathParams struct {
    FolderPath string `pathParam:"style=simple,explode=false,name=folderPath"`
    
}

type DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type DeleteFilesV3FoldersFolderPathArchiveByPathSecurity struct {
    Option1 *DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1 `security:"option"`
    Option2 *DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2 `security:"option"`
    
}

type DeleteFilesV3FoldersFolderPathArchiveByPathRequest struct {
    PathParams DeleteFilesV3FoldersFolderPathArchiveByPathPathParams 
    Security DeleteFilesV3FoldersFolderPathArchiveByPathSecurity 
    
}

type DeleteFilesV3FoldersFolderPathArchiveByPathResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

