package operations

import (
	"openapi/pkg/models/shared"
)

type RepertoireCreaRequest struct {
	Request shared.RepertoirEcreaterequest `request:"mediaType=application/json"`
}

type RepertoireCreaResponse struct {
	ContentType             string
	Erreur                  *shared.Erreur
	RepertoirEcreatereponse *shared.RepertoirEcreatereponse
	StatusCode              int64
}
