package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1BusinessusersIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PutSetupV1BusinessusersIDRequests struct {
	BusinessUserUpdateModel  *shared.BusinessUserUpdateModel `request:"mediaType=application/*+json"`
	BusinessUserUpdateModel1 *shared.BusinessUserUpdateModel `request:"mediaType=application/json"`
	BusinessUserUpdateModel2 *shared.BusinessUserUpdateModel `request:"mediaType=application/json-patch+json"`
	BusinessUserUpdateModel3 *shared.BusinessUserUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1BusinessusersIDRequest struct {
	PathParams PutSetupV1BusinessusersIDPathParams
	Request    *PutSetupV1BusinessusersIDRequests
}

type PutSetupV1BusinessusersIDResponse struct {
	BusinessUserViewModel *shared.BusinessUserViewModel
	ContentType           string
	StatusCode            int64
}
