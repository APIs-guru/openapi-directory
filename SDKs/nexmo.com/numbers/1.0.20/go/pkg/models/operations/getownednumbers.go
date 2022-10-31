package operations

import (
"openapi/pkg/models/shared")

type GetOwnedNumbersQueryParams struct {
    ApplicationID *string `queryParam:"style=form,explode=true,name=application_id"`
    Country *string `queryParam:"style=form,explode=true,name=country"`
    HasApplication *bool `queryParam:"style=form,explode=true,name=has_application"`
    Index *int64 `queryParam:"style=form,explode=true,name=index"`
    Pattern *string `queryParam:"style=form,explode=true,name=pattern"`
    SearchPattern *int64 `queryParam:"style=form,explode=true,name=search_pattern"`
    Size *int64 `queryParam:"style=form,explode=true,name=size"`
    
}

type GetOwnedNumbersRequest struct {
    QueryParams GetOwnedNumbersQueryParams 
    
}

type GetOwnedNumbersResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    AccountUnauthorized *shared.AccountUnauthorized 
    InboundNumbers *shared.InboundNumbers 
    
}

