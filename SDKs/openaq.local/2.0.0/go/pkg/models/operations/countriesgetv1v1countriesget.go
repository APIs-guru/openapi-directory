package operations

import (
	"openapi/pkg/models/shared"
)

type CountriesGetv1V1CountriesGetQueryParams struct {
	Country   []string                   `queryParam:"style=form,explode=true,name=country"`
	CountryID *string                    `queryParam:"style=form,explode=true,name=country_id"`
	Limit     *int64                     `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int64                     `queryParam:"style=form,explode=true,name=offset"`
	OrderBy   *shared.CountriesOrderEnum `queryParam:"style=form,explode=true,name=order_by"`
	Page      *int64                     `queryParam:"style=form,explode=true,name=page"`
	Sort      *shared.SortEnum           `queryParam:"style=form,explode=true,name=sort"`
}

type CountriesGetv1V1CountriesGetRequest struct {
	QueryParams CountriesGetv1V1CountriesGetQueryParams
}

type CountriesGetv1V1CountriesGetResponse struct {
	ContentType           string
	HTTPValidationError   *shared.HTTPValidationError
	OpenAqCountriesResult *shared.OpenAqCountriesResult
	StatusCode            int64
}
