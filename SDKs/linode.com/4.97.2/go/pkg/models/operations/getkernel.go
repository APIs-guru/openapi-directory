package operations

import (
	"openapi/pkg/models/shared"
)

type GetKernelPathParams struct {
	KernelID string `pathParam:"style=simple,explode=false,name=kernelId"`
}

type GetKernelRequest struct {
	PathParams GetKernelPathParams
}

type GetKernelDefaultApplicationJSON struct {
	Errors []shared.ErrorObject `json:"errors,omitempty"`
}

type GetKernelResponse struct {
	ContentType                           string
	Kernel                                *shared.Kernel
	StatusCode                            int64
	GetKernelDefaultApplicationJSONObject *GetKernelDefaultApplicationJSON
}
