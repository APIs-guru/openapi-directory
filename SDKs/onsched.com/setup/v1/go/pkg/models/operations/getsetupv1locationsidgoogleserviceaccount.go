package operations

import (
	"openapi/pkg/models/shared"
)

type GetSetupV1LocationsIDGoogleServiceAccountPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetSetupV1LocationsIDGoogleServiceAccountRequest struct {
	PathParams GetSetupV1LocationsIDGoogleServiceAccountPathParams
}

type GetSetupV1LocationsIDGoogleServiceAccountResponse struct {
	ContentType               string
	GoogleServiceAccountCreds *shared.GoogleServiceAccountCreds
	StatusCode                int64
}
