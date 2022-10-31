package operations

import (
"openapi/pkg/models/shared")

type CountriesGetV2CountriesCountryIDGetPathParams struct {
    CountryID string `pathParam:"style=simple,explode=false,name=country_id"`
    
}

type CountriesGetV2CountriesCountryIDGetQueryParams struct {
    Country []string `queryParam:"style=form,explode=true,name=country"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
    OrderBy *shared.CountriesOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Sort *shared.SortEnum `queryParam:"style=form,explode=true,name=sort"`
    
}

type CountriesGetV2CountriesCountryIDGetRequest struct {
    PathParams CountriesGetV2CountriesCountryIDGetPathParams 
    QueryParams CountriesGetV2CountriesCountryIDGetQueryParams 
    
}

type CountriesGetV2CountriesCountryIDGetResponse struct {
    ContentType string 
    HTTPValidationError *shared.HTTPValidationError 
    OpenAqCountriesResult *shared.OpenAqCountriesResult 
    StatusCode int64 
    
}

