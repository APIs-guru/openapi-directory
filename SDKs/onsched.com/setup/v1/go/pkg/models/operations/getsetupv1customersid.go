package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1CustomersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1CustomersIDRequest struct {
	PathParams GetSetupV1CustomersIDPathParams
}

type GetSetupV1CustomersIDResponse struct {
	ContentType       string
	CustomerViewModel *shared.CustomerViewModel
	StatusCode        int64
}
