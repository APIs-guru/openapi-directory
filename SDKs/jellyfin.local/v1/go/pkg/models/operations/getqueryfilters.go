package operations

import (
"openapi/pkg/models/shared")

type GetQueryFiltersQueryParams struct {
    IncludeItemTypes []string `queryParam:"style=form,explode=true,name=includeItemTypes"`
    IsAiring *bool `queryParam:"style=form,explode=true,name=isAiring"`
    IsKids *bool `queryParam:"style=form,explode=true,name=isKids"`
    IsMovie *bool `queryParam:"style=form,explode=true,name=isMovie"`
    IsNews *bool `queryParam:"style=form,explode=true,name=isNews"`
    IsSeries *bool `queryParam:"style=form,explode=true,name=isSeries"`
    IsSports *bool `queryParam:"style=form,explode=true,name=isSports"`
    ParentID *string `queryParam:"style=form,explode=true,name=parentId"`
    Recursive *bool `queryParam:"style=form,explode=true,name=recursive"`
    UserID *string `queryParam:"style=form,explode=true,name=userId"`
    
}

type GetQueryFiltersSecurity struct {
    CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetQueryFiltersRequest struct {
    QueryParams GetQueryFiltersQueryParams 
    Security GetQueryFiltersSecurity 
    
}

type GetQueryFiltersResponse struct {
    ContentType string 
    QueryFilters *shared.QueryFilters 
    StatusCode int64 
    
}

