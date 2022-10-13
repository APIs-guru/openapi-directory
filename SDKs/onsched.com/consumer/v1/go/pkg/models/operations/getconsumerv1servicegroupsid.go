package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1ServicegroupsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetConsumerV1ServicegroupsIDRequest struct {
	PathParams GetConsumerV1ServicegroupsIDPathParams
}

type GetConsumerV1ServicegroupsIDResponse struct {
	ContentType           string
	ServiceGroupViewModel *shared.ServiceGroupViewModel
	StatusCode            int64
}
