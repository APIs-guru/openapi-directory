package operations

import (
	"openapi/pkg/models/shared"
)

type ComptageRequest struct {
	Request shared.ComptageRequest `request:"mediaType=application/json"`
}

type ComptageResponse struct {
	ComptageReponse *shared.ComptageReponse
	ContentType     string
	Erreur          *shared.Erreur
	StatusCode      int64
}
