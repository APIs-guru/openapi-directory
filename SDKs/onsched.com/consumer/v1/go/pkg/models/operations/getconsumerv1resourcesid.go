package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1ResourcesIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetConsumerV1ResourcesIDRequest struct {
	PathParams GetConsumerV1ResourcesIDPathParams
}

type GetConsumerV1ResourcesIDResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
