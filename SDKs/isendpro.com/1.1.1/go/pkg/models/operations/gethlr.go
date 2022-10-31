package operations

import (
	"openapi/pkg/models/shared"
)

type GetHlrRequest struct {
	Request shared.HlRrequest `request:"mediaType=application/json"`
}

type GetHlrResponse struct {
	ContentType string
	Erreur      *shared.Erreur
	HlrReponse  *shared.HlrReponse
	StatusCode  int64
}
