package operations

import (
"openapi/pkg/models/shared")

type GetQueryParams struct {
    ExcludeItemTypes []string `queryParam:"style=form,explode=true,name=excludeItemTypes"`
    IncludeArtists *bool `queryParam:"style=form,explode=true,name=includeArtists"`
    IncludeGenres *bool `queryParam:"style=form,explode=true,name=includeGenres"`
    IncludeItemTypes []string `queryParam:"style=form,explode=true,name=includeItemTypes"`
    IncludeMedia *bool `queryParam:"style=form,explode=true,name=includeMedia"`
    IncludePeople *bool `queryParam:"style=form,explode=true,name=includePeople"`
    IncludeStudios *bool `queryParam:"style=form,explode=true,name=includeStudios"`
    IsKids *bool `queryParam:"style=form,explode=true,name=isKids"`
    IsMovie *bool `queryParam:"style=form,explode=true,name=isMovie"`
    IsNews *bool `queryParam:"style=form,explode=true,name=isNews"`
    IsSeries *bool `queryParam:"style=form,explode=true,name=isSeries"`
    IsSports *bool `queryParam:"style=form,explode=true,name=isSports"`
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    MediaTypes []string `queryParam:"style=form,explode=true,name=mediaTypes"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    SearchTerm string `queryParam:"style=form,explode=true,name=searchTerm"`
    StartIndex *int32 `queryParam:"style=form,explode=true,name=startIndex"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRequest struct {
    QueryParams GetQueryParams 
    Security GetSecurity 
    
}

type GetResponse struct {
    ContentType string 
    SearchHintResult *shared.SearchHintResult 
    StatusCode int64 
    
}

