package operations

import (
	"openapi/pkg/models/shared"
)

type GetCoveragePlanMemberElectionsPathParams struct {
	PlanID string `pathParam:"style=simple,explode=false,name=plan_id"`
}

type GetCoveragePlanMemberElectionsQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetCoveragePlanMemberElectionsRequest struct {
	PathParams  GetCoveragePlanMemberElectionsPathParams
	QueryParams GetCoveragePlanMemberElectionsQueryParams
}

type GetCoveragePlanMemberElectionsResponse struct {
	ContentType                   string
	PaginatedMemberElectionResult *shared.PaginatedMemberElectionResult
	StatusCode                    int64
}
