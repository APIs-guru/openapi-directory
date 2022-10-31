package operations

import (
	"openapi/pkg/models/shared"
)

type GetV05HiServicesServiceIDPathParams struct {
	ServiceID string `pathParam:"style=simple,explode=false,name=service-id"`
}

type GetV05HiServicesServiceIDHeaders struct {
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type GetV05HiServicesServiceIDRequest struct {
	PathParams GetV05HiServicesServiceIDPathParams
	Headers    GetV05HiServicesServiceIDHeaders
}

type GetV05HiServicesServiceIDResponse struct {
	Body                   []byte
	ContentType            string
	ErrorResponse          *shared.ErrorResponse
	ServiceProfileResponse *shared.ServiceProfileResponse
	StatusCode             int64
}
