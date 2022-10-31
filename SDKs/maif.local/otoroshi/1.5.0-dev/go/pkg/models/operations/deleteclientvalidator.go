package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteClientValidatorPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteClientValidatorSecurity struct {
	OtoroshiAuth shared.SchemeOtoroshiAuth `security:"scheme,type=http,subtype=basic"`
}

type DeleteClientValidatorRequest struct {
	PathParams DeleteClientValidatorPathParams
	Security   DeleteClientValidatorSecurity
}

type DeleteClientValidatorResponse struct {
	ContentType string
	Deleted     *shared.Deleted
	StatusCode  int64
}
