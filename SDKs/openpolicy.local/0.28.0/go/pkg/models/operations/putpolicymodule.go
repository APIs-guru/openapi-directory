package operations

import (
	"openapi/pkg/models/shared"
)

type PutPolicyModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutPolicyModuleQueryParams struct {
	Metrics *bool `queryParam:"style=form,explode=true,name=metrics"`
	Pretty  *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type PutPolicyModuleRequest struct {
	PathParams  PutPolicyModulePathParams
	QueryParams PutPolicyModuleQueryParams
	Request     []byte `request:"mediaType=text/plain"`
}

type PutPolicyModuleResponse struct {
	TwoHundredResult *shared.TwoHundredResult
	FourHundred      *shared.FourHundred
	ContentType      string
	StatusCode       int64
}
