package operations

import (
"openapi/pkg/models/shared")

type AddVirtualFolderQueryParams struct {
    CollectionType *string `queryParam:"style=form,explode=true,name=collectionType"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    Paths []string `queryParam:"style=form,explode=true,name=paths"`
    RefreshLibrary *bool `queryParam:"style=form,explode=true,name=refreshLibrary"`
    
}

type AddVirtualFolderRequests struct {
    AddVirtualFolderDto *shared.AddVirtualFolderDto `request:"mediaType=application/*+json"`
    AddVirtualFolderDto1 *shared.AddVirtualFolderDto `request:"mediaType=application/json"`
    AddVirtualFolderDto2 *shared.AddVirtualFolderDto `request:"mediaType=text/json"`
    
}

type AddVirtualFolderSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type AddVirtualFolderRequest struct {
    QueryParams AddVirtualFolderQueryParams 
    Request *AddVirtualFolderRequests 
    Security AddVirtualFolderSecurity 
    
}

type AddVirtualFolderResponse struct {
    ContentType string 
    StatusCode int64 
    
}

