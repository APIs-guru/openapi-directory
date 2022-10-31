package operations

import (
"openapi/pkg/models/shared")

type DeleteFilesV3FilesFileIDArchivePathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type DeleteFilesV3FilesFileIDArchiveSecurityOption1 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type DeleteFilesV3FilesFileIDArchiveSecurityOption2 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type DeleteFilesV3FilesFileIDArchiveSecurity struct {
    Option1 *DeleteFilesV3FilesFileIDArchiveSecurityOption1 `security:"option"`
    Option2 *DeleteFilesV3FilesFileIDArchiveSecurityOption2 `security:"option"`
    
}

type DeleteFilesV3FilesFileIDArchiveRequest struct {
    PathParams DeleteFilesV3FilesFileIDArchivePathParams 
    Security DeleteFilesV3FilesFileIDArchiveSecurity 
    
}

type DeleteFilesV3FilesFileIDArchiveResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

