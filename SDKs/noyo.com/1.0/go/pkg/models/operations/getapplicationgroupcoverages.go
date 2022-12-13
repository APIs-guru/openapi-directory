package operations

import (
	"openapi/pkg/models/shared"
)

type GetApplicationGroupCoveragesPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
}

type GetApplicationGroupCoveragesQueryParams struct {
	Offset   *int64 `queryParam:"style=form,explode=true,name=offset"`
	PageSize *int64 `queryParam:"style=form,explode=true,name=page_size"`
}

type GetApplicationGroupCoveragesRequest struct {
	PathParams  GetApplicationGroupCoveragesPathParams
	QueryParams GetApplicationGroupCoveragesQueryParams
}

type GetApplicationGroupCoveragesResponse struct {
	ContentType                  string
	PaginatedGroupCoverageResult *shared.PaginatedGroupCoverageResult
	StatusCode                   int64
}
