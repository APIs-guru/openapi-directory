package operations

type GetCountriesCountryCodeJSONPathParams struct {
	CountryCode string `pathParam:"style=simple,explode=false,name=country_code"`
}

type GetCountriesCountryCodeJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCountriesCountryCodeJSONRequest struct {
	PathParams  GetCountriesCountryCodeJSONPathParams
	QueryParams GetCountriesCountryCodeJSONQueryParams
}

type GetCountriesCountryCodeJSONResponse struct {
	ContentType string
	Country     *interface{}
	NotFound    *interface{}
	StatusCode  int64
}
