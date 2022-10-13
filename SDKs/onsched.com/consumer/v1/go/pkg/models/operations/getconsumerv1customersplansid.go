package operations

import (
	"openapi/pkg/models/shared"
)

type GetConsumerV1CustomersPlansIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetConsumerV1CustomersPlansIDRequest struct {
	PathParams GetConsumerV1CustomersPlansIDPathParams
}

type GetConsumerV1CustomersPlansIDResponse struct {
	ContentType           string
	CustomerPlanViewModel *shared.CustomerPlanViewModel
	StatusCode            int64
}
