package operations

import (
	"openapi/pkg/models/shared"
)

type MfrGetV2ManufacturersGetResponse struct {
	ContentType  string
	OpenAqResult *shared.OpenAqResult
	StatusCode   int64
}
