package operations

import (
	"time"
)

type GetSetupV1ResourcesIDAllocationsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ResourcesIDAllocationsQueryParams struct {
	EndDate   *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Limit     *int32     `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32     `queryParam:"style=form,explode=true,name=offset"`
	StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetSetupV1ResourcesIDAllocationsRequest struct {
	PathParams  GetSetupV1ResourcesIDAllocationsPathParams
	QueryParams GetSetupV1ResourcesIDAllocationsQueryParams
}

type GetSetupV1ResourcesIDAllocationsResponse struct {
	ContentType                     string
	ResourceAllocationListViewModel map[string]interface{}
	StatusCode                      int64
}
