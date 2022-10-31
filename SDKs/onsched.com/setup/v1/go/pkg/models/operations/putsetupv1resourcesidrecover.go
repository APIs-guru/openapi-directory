package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcesIDRecoverPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ResourcesIDRecoverQueryParams struct {
	GoogleAuthReturnURL  *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
	OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
}

type PutSetupV1ResourcesIDRecoverRequest struct {
	PathParams  PutSetupV1ResourcesIDRecoverPathParams
	QueryParams PutSetupV1ResourcesIDRecoverQueryParams
}

type PutSetupV1ResourcesIDRecoverResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
