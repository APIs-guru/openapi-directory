package operations

import (
	"openapi/pkg/models/shared"
)

type SubaccountAddRequest struct {
	Request shared.SubaccountAddRequest `request:"mediaType=application/json"`
}

type SubaccountAddResponse struct {
	ContentType           string
	Erreur                *shared.Erreur
	StatusCode            int64
	SubaccountAddResponse *shared.SubaccountAddResponse
}
