package operations

import (
	"openapi/pkg/models/shared"
)

type GetAllApplicationsQueryParams struct {
	ApplicationType *string `queryParam:"style=form,explode=true,name=application_type"`
	CarrierID       *string `queryParam:"style=form,explode=true,name=carrier_id"`
	GroupID         *string `queryParam:"style=form,explode=true,name=group_id"`
	Offset          *int64  `queryParam:"style=form,explode=true,name=offset"`
	PageSize        *int64  `queryParam:"style=form,explode=true,name=page_size"`
	Status          *string `queryParam:"style=form,explode=true,name=status"`
}

type GetAllApplicationsRequest struct {
	QueryParams GetAllApplicationsQueryParams
}

type GetAllApplicationsResponse struct {
	ContentType                     string
	PaginatedGroupApplicationResult *shared.PaginatedGroupApplicationResult
	StatusCode                      int64
}
