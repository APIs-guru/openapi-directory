package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainsHeaders struct {
	TrainingKey string `header:"name=Training-Key"`
}

type GetDomainsRequest struct {
	Headers GetDomainsHeaders
}

type GetDomainsResponse struct {
	Body        []byte
	ContentType string
	Domains     []shared.Domain
	StatusCode  int64
}
