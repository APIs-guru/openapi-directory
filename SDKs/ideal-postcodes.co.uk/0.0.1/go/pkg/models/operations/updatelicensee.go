package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLicenseePathParams struct {
	Key string `pathParam:"style=simple,explode=false,name=key"`
}

type UpdateLicenseeSecurity struct {
	APIKey    shared.SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken shared.SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}

type UpdateLicenseeRequest struct {
	PathParams UpdateLicenseePathParams
	Request    shared.UpdateLicenseeSchema `request:"mediaType=application/json"`
	Security   UpdateLicenseeSecurity
}

type UpdateLicenseeResponse struct {
	ContentType            string
	LicenseeResponseSchema *shared.LicenseeResponseSchema
	StatusCode             int64
}
