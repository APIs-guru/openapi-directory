package operations

import (
"openapi/pkg/models/shared")

type GetAPIV1PublicationTypesQueryParams struct {
    Skip *int32 `queryParam:"style=form,explode=true,name=Skip"`
    Take *int32 `queryParam:"style=form,explode=true,name=Take"`
    
}

type GetAPIV1PublicationTypesRequest struct {
    QueryParams GetAPIV1PublicationTypesQueryParams 
    
}

type GetAPIV1PublicationTypesResponse struct {
    Body []byte 
    ContentType string 
    ProblemDetails map[string]interface{} 
    PublicationTypeSearchResult *shared.PublicationTypeSearchResult 
    StatusCode int64 
    
}

