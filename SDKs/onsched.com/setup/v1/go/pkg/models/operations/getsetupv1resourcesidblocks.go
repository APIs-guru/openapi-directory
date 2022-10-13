package operations

import (
	"time"
)

type GetSetupV1ResourcesIDBlocksPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1ResourcesIDBlocksQueryParams struct {
	EndDate   *time.Time `queryParam:"style=form,explode=true,name=endDate"`
	Limit     *int32     `queryParam:"style=form,explode=true,name=limit"`
	Offset    *int32     `queryParam:"style=form,explode=true,name=offset"`
	StartDate *time.Time `queryParam:"style=form,explode=true,name=startDate"`
}

type GetSetupV1ResourcesIDBlocksRequest struct {
	PathParams  GetSetupV1ResourcesIDBlocksPathParams
	QueryParams GetSetupV1ResourcesIDBlocksQueryParams
}

type GetSetupV1ResourcesIDBlocksResponse struct {
	ContentType                string
	ResourceBlockListViewModel map[string]interface{}
	StatusCode                 int64
}
