package operations

import (
"openapi/pkg/models/shared")

type GetFilesV3FilesFileIDGetByIDPathParams struct {
    FileID string `pathParam:"style=simple,explode=false,name=fileId"`
    
}

type GetFilesV3FilesFileIDGetByIDQueryParams struct {
    Properties []string `queryParam:"style=form,explode=true,name=properties"`
    
}

type GetFilesV3FilesFileIDGetByIDSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetFilesV3FilesFileIDGetByIDSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetFilesV3FilesFileIDGetByIDSecurityOption3 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetFilesV3FilesFileIDGetByIDSecurity struct {
    Option1 *GetFilesV3FilesFileIDGetByIDSecurityOption1 `security:"option"`
    Option2 *GetFilesV3FilesFileIDGetByIDSecurityOption2 `security:"option"`
    Option3 *GetFilesV3FilesFileIDGetByIDSecurityOption3 `security:"option"`
    
}

type GetFilesV3FilesFileIDGetByIDRequest struct {
    PathParams GetFilesV3FilesFileIDGetByIDPathParams 
    QueryParams GetFilesV3FilesFileIDGetByIDQueryParams 
    Security GetFilesV3FilesFileIDGetByIDSecurity 
    
}

type GetFilesV3FilesFileIDGetByIDResponse struct {
    Body []byte 
    ContentType string 
    File *shared.File 
    StatusCode int64 
    
}

