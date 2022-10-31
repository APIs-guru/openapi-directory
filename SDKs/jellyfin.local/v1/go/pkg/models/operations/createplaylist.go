package operations

import (
"openapi/pkg/models/shared")

type CreatePlaylistQueryParams struct {
    Ids []string `queryParam:"style=form,explode=true,name=ids"`
    MediaType *string `queryParam:"style=form,explode=true,name=mediaType"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type CreatePlaylistRequests struct {
    CreatePlaylistDto *shared.CreatePlaylistDto `request:"mediaType=application/*+json"`
    CreatePlaylistDto1 *shared.CreatePlaylistDto `request:"mediaType=application/json"`
    CreatePlaylistDto2 *shared.CreatePlaylistDto `request:"mediaType=text/json"`
    
}

type CreatePlaylistSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type CreatePlaylistRequest struct {
    QueryParams CreatePlaylistQueryParams 
    Request *CreatePlaylistRequests 
    Security CreatePlaylistSecurity 
    
}

type CreatePlaylistResponse struct {
    ContentType string 
    PlaylistCreationResult *shared.PlaylistCreationResult 
    StatusCode int64 
    
}

