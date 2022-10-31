package operations



type GetCountriesCountryCodeRegionsJSONPathParams struct {
    CountryCode string `pathParam:"style=simple,explode=false,name=country_code"`
    
}

type GetCountriesCountryCodeRegionsJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCountriesCountryCodeRegionsJSONRequest struct {
    PathParams GetCountriesCountryCodeRegionsJSONPathParams 
    QueryParams GetCountriesCountryCodeRegionsJSONQueryParams 
    
}

type GetCountriesCountryCodeRegionsJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Regions []interface{} 
    StatusCode int64 
    
}

