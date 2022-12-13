package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationMemberElectionsPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetApplicationMemberElectionsQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetApplicationMemberElectionsRequest struct {
	PathParams  GetApplicationMemberElectionsPathParams
	QueryParams GetApplicationMemberElectionsQueryParams
}

type GetApplicationMemberElectionsResponse struct {
	ContentType                   string
	PaginatedMemberElectionResult *shared.PaginatedMemberElectionResult
	StatusCode                    int64
}
