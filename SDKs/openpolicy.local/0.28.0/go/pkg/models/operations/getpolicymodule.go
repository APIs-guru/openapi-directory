package operations

import (
	"openapi/pkg/models/shared"
)

type GetPolicyModulePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetPolicyModuleQueryParams struct {
	Pretty *bool `queryParam:"style=form,explode=true,name=pretty"`
}

type GetPolicyModuleRequest struct {
	PathParams  GetPolicyModulePathParams
	QueryParams GetPolicyModuleQueryParams
}

type GetPolicyModuleResponse struct {
	TwoHundredResult   *shared.TwoHundredResult
	FourHundred        *shared.FourHundred
	FourHundredAndFour *shared.FourHundredAndFour
	ContentType        string
	StatusCode         int64
}
