package operations

import (
	"openapi/pkg/models/shared"
)

type CountriesGetV1CountriesCountryIDGetPathParams struct {
	CountryID string `pathParam:"style=simple,explode=false,name=country_id"`
}

type CountriesGetV1CountriesCountryIDGetQueryParams struct {
	Country []string                   `queryParam:"style=form,explode=true,name=country"`
	Limit   *int64                     `queryParam:"style=form,explode=true,name=limit"`
	Offset  *int64                     `queryParam:"style=form,explode=true,name=offset"`
	OrderBy *shared.CountriesOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
	Page    *int64                     `queryParam:"style=form,explode=true,name=page"`
	Sort    *shared.SortEnum           `queryParam:"style=form,explode=true,name=sort"`
}

type CountriesGetV1CountriesCountryIDGetRequest struct {
	PathParams  CountriesGetV1CountriesCountryIDGetPathParams
	QueryParams CountriesGetV1CountriesCountryIDGetQueryParams
}

type CountriesGetV1CountriesCountryIDGetResponse struct {
	ContentType           string
	HTTPValidationError   *shared.HTTPValidationError
	OpenAqCountriesResult *shared.OpenAqCountriesResult
	StatusCode            int64
}
