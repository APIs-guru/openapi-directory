package operations

import (
"openapi/pkg/models/shared")

type CitiesGetV2CitiesGetQueryParams struct {
    City []string `queryParam:"style=form,explode=true,name=city"`
    Country []string `queryParam:"style=form,explode=true,name=country"`
    CountryID *string `queryParam:"style=form,explode=true,name=country_id"`
    Entity *string `queryParam:"style=form,explode=true,name=entity"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *shared.CitiesOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type CitiesGetV2CitiesGetRequest struct {
    QueryParams CitiesGetV2CitiesGetQueryParams 
    
}

type CitiesGetV2CitiesGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    OpenAqCitiesResult *shared.OpenAqCitiesResult 
    StatusCode int64 
    
}

