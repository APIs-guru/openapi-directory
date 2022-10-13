package operations

import (
	"time"
)

type GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzPathParams struct {
	DateTimeTz time.Time `pathParam:"style=simple,explode=false,name=dateTimeTz"`
	ID         string    `pathParam:"style=simple,explode=false,name=id"`
	ResourceID string    `pathParam:"style=simple,explode=false,name=resourceId"`
	ServiceID  string    `pathParam:"style=simple,explode=false,name=serviceId"`
}

type GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzRequest struct {
	PathParams GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzPathParams
}

type GetConsumerV1CustomersIDPlanlimitsServiceIDResourceIDDateTimeTzResponse struct {
	ContentType            string
	PlanLimitListViewModel map[string]interface{}
	StatusCode             int64
}
