package operations

import (
	"openapi/pkg/models/shared"
)

type ExportIterationPathParams struct {
	IterationID string `pathParam:"style=simple,explode=false,name=iterationId"`
	ProjectID   string `pathParam:"style=simple,explode=false,name=projectId"`
}

type ExportIterationFlavorEnum string

const (
	ExportIterationFlavorEnumLinux   ExportIterationFlavorEnum = "Linux"
	ExportIterationFlavorEnumWindows ExportIterationFlavorEnum = "Windows"
)

type ExportIterationPlatformEnum string

const (
	ExportIterationPlatformEnumCoreMl     ExportIterationPlatformEnum = "CoreML"
	ExportIterationPlatformEnumTensorFlow ExportIterationPlatformEnum = "TensorFlow"
	ExportIterationPlatformEnumDockerFile ExportIterationPlatformEnum = "DockerFile"
	ExportIterationPlatformEnumOnnx       ExportIterationPlatformEnum = "ONNX"
)

type ExportIterationQueryParams struct {
	Flavor   *ExportIterationFlavorEnum  `queryParam:"style=form,explode=true,name=flavor"`
	Platform ExportIterationPlatformEnum `queryParam:"style=form,explode=true,name=platform"`
}

type ExportIterationHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type ExportIterationRequest struct {
	PathParams  ExportIterationPathParams
	QueryParams ExportIterationQueryParams
	Headers     ExportIterationHeaders
}

type ExportIterationResponse struct {
	Body        []byte
	ContentType string
	Export      *shared.Export
	StatusCode  int64
}
