package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateServicePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateServiceRequest struct {
	PathParams UpdateServicePathParams
	Request    shared.ServiceInput `request:"mediaType=application/json"`
}

type UpdateServiceResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
