package operations

import (
	"openapi/pkg/models/shared"
)

type CommitteeListCommitteesGetQueryParams struct {
	Apikey         *string                             `queryParam:"style=form,explode=true,name=apikey"`
	Chamber        *shared.OrgClassificationEnum       `queryParam:"style=form,explode=true,name=chamber"`
	Classification *shared.CommitteeClassificationEnum `queryParam:"style=form,explode=true,name=classification"`
	Include        []shared.CommitteeIncludeEnum       `queryParam:"style=form,explode=true,name=include"`
	Jurisdiction   *string                             `queryParam:"style=form,explode=true,name=jurisdiction"`
	Page           *int64                              `queryParam:"style=form,explode=true,name=page"`
	Parent         *string                             `queryParam:"style=form,explode=true,name=parent"`
	PerPage        *int64                              `queryParam:"style=form,explode=true,name=per_page"`
}

type CommitteeListCommitteesGetHeaders struct {
	XAPIKey *string `header:"name=x-api-key"`
}

type CommitteeListCommitteesGetRequest struct {
	QueryParams CommitteeListCommitteesGetQueryParams
	Headers     CommitteeListCommitteesGetHeaders
}

type CommitteeListCommitteesGetResponse struct {
	CommitteeList       *shared.CommitteeList
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
