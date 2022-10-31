package operations

import (
	"openapi/pkg/models/shared"
)

type JurisdictionListJurisdictionsGetQueryParams struct {
	Apikey         *string                                `queryParam:"style=form,explode=true,name=apikey"`
	Classification *shared.JurisdictionClassificationEnum `queryParam:"style=form,explode=true,name=classification"`
	Include        []shared.JurisdictionIncludeEnum       `queryParam:"style=form,explode=true,name=include"`
	Page           *int64                                 `queryParam:"style=form,explode=true,name=page"`
	PerPage        *int64                                 `queryParam:"style=form,explode=true,name=per_page"`
}

type JurisdictionListJurisdictionsGetHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=x-api-key"`
}

type JurisdictionListJurisdictionsGetRequest struct {
	QueryParams JurisdictionListJurisdictionsGetQueryParams
	Headers     JurisdictionListJurisdictionsGetHeaders
}

type JurisdictionListJurisdictionsGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	JurisdictionList    *shared.JurisdictionList
	StatusCode          int64
}
