package operations

import (
	"openapi/pkg/models/shared"
)

type PeopleSearchPeopleGetQueryParams struct {
	Apikey            *string                       `queryParam:"style=form,explode=true,name=apikey"`
	District          *string                       `queryParam:"style=form,explode=true,name=district"`
	ID                []string                      `queryParam:"style=form,explode=true,name=id"`
	Include           []shared.PersonIncludeEnum    `queryParam:"style=form,explode=true,name=include"`
	Jurisdiction      *string                       `queryParam:"style=form,explode=true,name=jurisdiction"`
	Name              *string                       `queryParam:"style=form,explode=true,name=name"`
	OrgClassification *shared.OrgClassificationEnum `queryParam:"style=form,explode=true,name=org_classification"`
	Page              *int64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage           *int64                        `queryParam:"style=form,explode=true,name=per_page"`
}

type PeopleSearchPeopleGetHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=x-api-key"`
}

type PeopleSearchPeopleGetRequest struct {
	QueryParams PeopleSearchPeopleGetQueryParams
	Headers     PeopleSearchPeopleGetHeaders
}

type PeopleSearchPeopleGetResponse struct {
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	PersonList          *shared.PersonList
	StatusCode          int64
}
