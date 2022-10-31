package operations

import (
"openapi/pkg/models/shared")

type GetInstantMixFromPlaylistPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetInstantMixFromPlaylistQueryParams struct {
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetInstantMixFromPlaylistSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetInstantMixFromPlaylistRequest struct {
    PathParams GetInstantMixFromPlaylistPathParams 
    QueryParams GetInstantMixFromPlaylistQueryParams 
    Security GetInstantMixFromPlaylistSecurity 
    
}

type GetInstantMixFromPlaylistResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

