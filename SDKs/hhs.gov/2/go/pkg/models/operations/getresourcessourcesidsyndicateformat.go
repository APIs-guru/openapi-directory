package operations

import (
"openapi/pkg/models/shared")

type GetResourcesSourcesIDSyndicateFormatPathParams struct {
    Format string `pathParam:"style=simple,explode=false,name=format"`
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetResourcesSourcesIDSyndicateFormatQueryParams struct {
    DisplayMethod *string `queryParam:"style=form,explode=false,name=displayMethod"`
    
}

type GetResourcesSourcesIDSyndicateFormatRequest struct {
    PathParams GetResourcesSourcesIDSyndicateFormatPathParams 
    QueryParams GetResourcesSourcesIDSyndicateFormatQueryParams 
    
}

type GetResourcesSourcesIDSyndicateFormatResponse struct {
    ContentType string 
    MediaItemWrappeds []shared.MediaItemWrapped 
    StatusCode int64 
    
}

