package operations

import (
	"openapi/pkg/models/shared"
)

type BillsSearchBillsGetQueryParams struct {
	ActionSince           *string                    `queryParam:"style=form,explode=true,name=action_since"`
	Apikey                *string                    `queryParam:"style=form,explode=true,name=apikey"`
	Chamber               *string                    `queryParam:"style=form,explode=true,name=chamber"`
	Classification        *string                    `queryParam:"style=form,explode=true,name=classification"`
	CreatedSince          *string                    `queryParam:"style=form,explode=true,name=created_since"`
	Include               []shared.BillIncludeEnum   `queryParam:"style=form,explode=true,name=include"`
	Jurisdiction          *string                    `queryParam:"style=form,explode=true,name=jurisdiction"`
	Page                  *int64                     `queryParam:"style=form,explode=true,name=page"`
	PerPage               *int64                     `queryParam:"style=form,explode=true,name=per_page"`
	Q                     *string                    `queryParam:"style=form,explode=true,name=q"`
	Session               *string                    `queryParam:"style=form,explode=true,name=session"`
	Sort                  *shared.BillSortOptionEnum `queryParam:"style=form,explode=true,name=sort"`
	Sponsor               *string                    `queryParam:"style=form,explode=true,name=sponsor"`
	SponsorClassification *string                    `queryParam:"style=form,explode=true,name=sponsor_classification"`
	Subject               []string                   `queryParam:"style=form,explode=true,name=subject"`
	UpdatedSince          *string                    `queryParam:"style=form,explode=true,name=updated_since"`
}

type BillsSearchBillsGetHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=x-api-key"`
}

type BillsSearchBillsGetRequest struct {
	QueryParams BillsSearchBillsGetQueryParams
	Headers     BillsSearchBillsGetHeaders
}

type BillsSearchBillsGetResponse struct {
	BillList            *shared.BillList
	ContentType         string
	HTTPValidationError *shared.HTTPValidationError
	StatusCode          int64
}
