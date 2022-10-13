package operations

import (
	"openapi/pkg/models/shared"
)

type GetServiceByIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetServiceByIDRequest struct {
	PathParams GetServiceByIDPathParams
}

type GetServiceByIDResponse struct {
	ContentType string
	Service     *shared.Service
	StatusCode  int64
}
