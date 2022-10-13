package operations

import (
	"openapi/pkg/models/shared"
)

type GetBillsQueryParams struct {
	BillIds            []int32                      `queryParam:"style=form,explode=true,name=BillIds"`
	BillStage          []int32                      `queryParam:"style=form,explode=true,name=BillStage"`
	BillStagesExcluded []int32                      `queryParam:"style=form,explode=true,name=BillStagesExcluded"`
	BillType           []int32                      `queryParam:"style=form,explode=true,name=BillType"`
	CurrentHouse       *shared.HouseEnum            `queryParam:"style=form,explode=true,name=CurrentHouse"`
	DepartmentID       *int32                       `queryParam:"style=form,explode=true,name=DepartmentId"`
	IsDefeated         *bool                        `queryParam:"style=form,explode=true,name=IsDefeated"`
	IsWithdrawn        *bool                        `queryParam:"style=form,explode=true,name=IsWithdrawn"`
	MemberID           *int32                       `queryParam:"style=form,explode=true,name=MemberId"`
	OriginatingHouse   *shared.OriginatingHouseEnum `queryParam:"style=form,explode=true,name=OriginatingHouse"`
	SearchTerm         *string                      `queryParam:"style=form,explode=true,name=SearchTerm"`
	Session            *int32                       `queryParam:"style=form,explode=true,name=Session"`
	Skip               *int32                       `queryParam:"style=form,explode=true,name=Skip"`
	SortOrder          *shared.BillSortOrderEnum    `queryParam:"style=form,explode=true,name=SortOrder"`
	Take               *int32                       `queryParam:"style=form,explode=true,name=Take"`
}

type GetBillsRequest struct {
	QueryParams GetBillsQueryParams
}

type GetBillsResponse struct {
	BillSummarySearchResult *shared.BillSummarySearchResult
	Body                    []byte
	ContentType             string
	ProblemDetails          map[string]interface{}
	StatusCode              int64
}
