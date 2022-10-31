package operations

import (
"time"
"openapi/pkg/models/shared")

type GetFilesV3FoldersSearchDoSearchQueryParams struct {
    After *string `queryParam:"style=form,explode=true,name=after"`
    Before *string `queryParam:"style=form,explode=true,name=before"`
    CreatedAt *time.Time `queryParam:"style=form,explode=true,name=createdAt"`
    CreatedAtGte *time.Time `queryParam:"style=form,explode=true,name=createdAtGte"`
    CreatedAtLte *time.Time `queryParam:"style=form,explode=true,name=createdAtLte"`
    ID *string `queryParam:"style=form,explode=true,name=id"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    ParentFolderID *int64 `queryParam:"style=form,explode=true,name=parentFolderId"`
    Path *string `queryParam:"style=form,explode=true,name=path"`
    Properties []string `queryParam:"style=form,explode=true,name=properties"`
    Sort []string `queryParam:"style=form,explode=true,name=sort"`
    UpdatedAt *time.Time `queryParam:"style=form,explode=true,name=updatedAt"`
    UpdatedAtGte *time.Time `queryParam:"style=form,explode=true,name=updatedAtGte"`
    UpdatedAtLte *time.Time `queryParam:"style=form,explode=true,name=updatedAtLte"`
    
}

type GetFilesV3FoldersSearchDoSearchSecurityOption1 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetFilesV3FoldersSearchDoSearchSecurityOption2 struct {
    Hapikey shared.SchemeHapikey `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetFilesV3FoldersSearchDoSearchSecurityOption3 struct {
    Oauth2Legacy shared.SchemeOauth2Legacy `security:"scheme,type=oauth2"`
    
}

type GetFilesV3FoldersSearchDoSearchSecurity struct {
    Option1 *GetFilesV3FoldersSearchDoSearchSecurityOption1 `security:"option"`
    Option2 *GetFilesV3FoldersSearchDoSearchSecurityOption2 `security:"option"`
    Option3 *GetFilesV3FoldersSearchDoSearchSecurityOption3 `security:"option"`
    
}

type GetFilesV3FoldersSearchDoSearchRequest struct {
    QueryParams GetFilesV3FoldersSearchDoSearchQueryParams 
    Security GetFilesV3FoldersSearchDoSearchSecurity 
    
}

type GetFilesV3FoldersSearchDoSearchResponse struct {
    Body []byte 
    CollectionResponseFolder *shared.CollectionResponseFolder 
    ContentType string 
    StatusCode int64 
    
}

