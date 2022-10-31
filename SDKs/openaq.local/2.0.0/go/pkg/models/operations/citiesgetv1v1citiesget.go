package operations

import (
"openapi/pkg/models/shared")

type CitiesGetv1V1CitiesGetQueryParams struct {
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

type CitiesGetv1V1CitiesGetRequest struct {
    QueryParams CitiesGetv1V1CitiesGetQueryParams 
    
}

type CitiesGetv1V1CitiesGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    OpenAqCitiesResult *shared.OpenAqCitiesResult 
    StatusCode int64 
    
}

