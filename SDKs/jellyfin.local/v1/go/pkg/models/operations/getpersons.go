package operations

import (
"openapi/pkg/models/shared")

type GetPersonsQueryParams struct {
    AppearsInItemID *string `queryParam:"style=form,explode=true,name=appearsInItemId"`
    EnableImageTypes []shared.ImageTypeEnum `queryParam:"style=form,explode=true,name=enableImageTypes"`
    EnableImages *bool `queryParam:"style=form,explode=true,name=enableImages"`
    EnableUserData *bool `queryParam:"style=form,explode=true,name=enableUserData"`
    ExcludePersonTypes []string `queryParam:"style=form,explode=true,name=excludePersonTypes"`
    Fields []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
    Filters []shared.ItemFilterEnum `queryParam:"style=form,explode=true,name=filters"`
    ImageTypeLimit *int32 `queryParam:"style=form,explode=true,name=imageTypeLimit"`
    IsFavorite *bool `queryParam:"style=form,explode=true,name=isFavorite"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    PersonTypes []string `queryParam:"style=form,explode=true,name=personTypes"`
    SearchTerm *string `queryParam:"style=form,explode=true,name=searchTerm"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetPersonsSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetPersonsRequest struct {
    QueryParams GetPersonsQueryParams 
    Security GetPersonsSecurity 
    
}

type GetPersonsResponse struct {
    BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult 
    ContentType string 
    StatusCode int64 
    
}

