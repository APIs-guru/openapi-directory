package operations

import (
"openapi/pkg/models/shared")

type GetResourcesUserMediaListsIDJSONPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesUserMediaListsIDJSONQueryParams struct {
    DisplayMethod *string `queryParam:"style=form,explode=false,name=displayMethod"`
    
}

type GetResourcesUserMediaListsIDJSONRequest struct {
    PathParams GetResourcesUserMediaListsIDJSONPathParams 
    QueryParams GetResourcesUserMediaListsIDJSONQueryParams 
    
}

type GetResourcesUserMediaListsIDJSONResponse struct {
    ContentType string 
    MediaItemWrappeds []shared.MediaItemWrapped 
    StatusCode int64 
    
}

