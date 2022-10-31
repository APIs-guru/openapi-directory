package operations

import (
	"openapi/pkg/models/shared"
)

type GetDomainPathParams struct {
	DomainID string `pathParam:"style=simple,explode=false,name=domainId"`
}

type GetDomainHeaders struct {
	TrainingKey string `header:"style=simple,explode=false,name=Training-Key"`
}

type GetDomainRequest struct {
	PathParams GetDomainPathParams
	Headers    GetDomainHeaders
}

type GetDomainResponse struct {
	Body        []byte
	ContentType string
	Domain      *shared.Domain
	StatusCode  int64
}
