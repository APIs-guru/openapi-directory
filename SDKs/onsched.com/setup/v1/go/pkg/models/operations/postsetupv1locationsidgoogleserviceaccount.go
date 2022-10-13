package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1LocationsIDGoogleServiceAccountPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PostSetupV1LocationsIDGoogleServiceAccountRequests struct {
	GoogleServiceAccountCreds  *shared.GoogleServiceAccountCreds `request:"mediaType=application/*+json"`
	GoogleServiceAccountCreds1 *shared.GoogleServiceAccountCreds `request:"mediaType=application/json"`
	GoogleServiceAccountCreds2 *shared.GoogleServiceAccountCreds `request:"mediaType=application/json-patch+json"`
	GoogleServiceAccountCreds3 *shared.GoogleServiceAccountCreds `request:"mediaType=text/json"`
}

type PostSetupV1LocationsIDGoogleServiceAccountRequest struct {
	PathParams PostSetupV1LocationsIDGoogleServiceAccountPathParams
	Request    *PostSetupV1LocationsIDGoogleServiceAccountRequests
}

type PostSetupV1LocationsIDGoogleServiceAccountResponse struct {
	ContentType               string
	GoogleServiceAccountCreds *shared.GoogleServiceAccountCreds
	StatusCode                int64
}
