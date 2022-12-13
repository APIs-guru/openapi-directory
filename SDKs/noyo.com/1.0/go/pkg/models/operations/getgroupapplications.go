package operations

import (
	"openapi/pkg/models/shared"
)

type GetGroupApplicationsPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=group_id"`
}

type GetGroupApplicationsQueryParams struct {
	ApplicationType *string `queryParam:"style=form,explode=true,name=application_type"`
	CarrierGroupID  *string `queryParam:"style=form,explode=true,name=carrier_group_id"`
	CarrierID       *string `queryParam:"style=form,explode=true,name=carrier_id"`
	Offset          *int64  `queryParam:"style=form,explode=true,name=offset"`
	PageSize        *int64  `queryParam:"style=form,explode=true,name=page_size"`
	SortBy          *string `queryParam:"style=form,explode=true,name=sort_by"`
	SortDirection   *string `queryParam:"style=form,explode=true,name=sort_direction"`
	Status          *string `queryParam:"style=form,explode=true,name=status"`
}

type GetGroupApplicationsRequest struct {
	PathParams  GetGroupApplicationsPathParams
	QueryParams GetGroupApplicationsQueryParams
}

type GetGroupApplicationsResponse struct {
	ContentType                     string
	PaginatedGroupApplicationResult *shared.PaginatedGroupApplicationResult
	StatusCode                      int64
}
