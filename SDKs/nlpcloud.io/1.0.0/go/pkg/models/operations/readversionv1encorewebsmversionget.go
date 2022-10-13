package operations

import (
	"openapi/pkg/models/shared"
)

type ReadVersionV1EnCoreWebSmVersionGetResponse struct {
	ContentType string
	StatusCode  int64
	VersionOut  *shared.VersionOut
}
