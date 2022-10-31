package operations



type GetCountriesCountryCodeRegionsRegionCodeJSONPathParams struct {
    CountryCode string `pathParam:"style=simple,explode=false,name=country_code"`
    RegionCode string `pathParam:"style=simple,explode=false,name=region_code"`
    
}

type GetCountriesCountryCodeRegionsRegionCodeJSONQueryParams struct {
    Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
    Login string `queryParam:"style=form,explode=true,name=login"`
    
}

type GetCountriesCountryCodeRegionsRegionCodeJSONRequest struct {
    PathParams GetCountriesCountryCodeRegionsRegionCodeJSONPathParams 
    QueryParams GetCountriesCountryCodeRegionsRegionCodeJSONQueryParams 
    
}

type GetCountriesCountryCodeRegionsRegionCodeJSONResponse struct {
    ContentType string 
    NotFound *interface{} 
    Region *interface{} 
    StatusCode int64 
    
}

