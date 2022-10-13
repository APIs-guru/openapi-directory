package operations

import (
	"openapi/pkg/models/shared"
)

type AddShortlinkRequest struct {
	Request shared.ShortlinkRequest `request:"mediaType=application/json"`
}

type AddShortlinkResponse struct {
	ContentType       string
	Erreur            *shared.Erreur
	ShortlinkResponse *shared.ShortlinkResponse
	StatusCode        int64
}
