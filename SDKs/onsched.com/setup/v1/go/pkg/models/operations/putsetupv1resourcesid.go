package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1ResourcesIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1ResourcesIDQueryParams struct {
	GoogleAuthReturnURL  *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
	OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
}

type PutSetupV1ResourcesIDRequests struct {
	ResourceUpdateModel  *shared.ResourceUpdateModel `request:"mediaType=application/*+json"`
	ResourceUpdateModel1 *shared.ResourceUpdateModel `request:"mediaType=application/json"`
	ResourceUpdateModel2 *shared.ResourceUpdateModel `request:"mediaType=application/json-patch+json"`
	ResourceUpdateModel3 *shared.ResourceUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1ResourcesIDRequest struct {
	PathParams  PutSetupV1ResourcesIDPathParams
	QueryParams PutSetupV1ResourcesIDQueryParams
	Request     *PutSetupV1ResourcesIDRequests
}

type PutSetupV1ResourcesIDResponse struct {
	ContentType       string
	ResourceViewModel *shared.ResourceViewModel
	StatusCode        int64
}
