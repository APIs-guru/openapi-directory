package operations

import (
	"openapi/pkg/models/shared"
)

type PeopleGeoPeopleGeoGetQueryParams struct {
	Apikey  *string                    `queryParam:"style=form,explode=true,name=apikey"`
	Include []shared.PersonIncludeEnum `queryParam:"style=form,explode=true,name=include"`
	Lat     float64                    `queryParam:"style=form,explode=true,name=lat"`
	Lng     float64                    `queryParam:"style=form,explode=true,name=lng"`
}

type PeopleGeoPeopleGeoGetHeaders struct {
	XAPIKey *string `header:"name=x-api-key"`
}

type PeopleGeoPeopleGeoGetRequest struct {
	QueryParams PeopleGeoPeopleGeoGetQueryParams
	Headers     PeopleGeoPeopleGeoGetHeaders
}

type PeopleGeoPeopleGeoGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	PersonList          *shared.PersonList
	StatusCode          int64
}
