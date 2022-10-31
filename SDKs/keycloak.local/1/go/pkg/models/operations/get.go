package operations

import (
	"openapi/pkg/models/shared"
)

type GetResponse struct {
	ContentType              string
	ServerInfoRepresentation *shared.ServerInfoRepresentation
	StatusCode               int64
}
