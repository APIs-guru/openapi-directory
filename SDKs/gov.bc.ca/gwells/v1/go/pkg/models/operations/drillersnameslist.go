package operations

import (
"openapi/pkg/models/shared")

type DrillersNamesListQueryParams struct {
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type DrillersNamesListRequest struct {
    QueryParams DrillersNamesListQueryParams 
    
}

type DrillersNamesListResponse struct {
    ContentType string 
    PersonNames []shared.PersonName 
    StatusCode int64 
    
}

