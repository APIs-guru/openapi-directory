package operations

import (
	"openapi/pkg/models/shared"
)

type ValidateLicenseePathParams struct {
	LicenseeNumber string `pathParam:"style=simple,explode=false,name=licenseeNumber"`
}

type ValidateLicenseeRequestBodyActionEnum string

const (
	ValidateLicenseeRequestBodyActionEnumCheckOut ValidateLicenseeRequestBodyActionEnum = "checkOut"
	ValidateLicenseeRequestBodyActionEnumCheckIn  ValidateLicenseeRequestBodyActionEnum = "checkIn"
)

type ValidateLicenseeRequestBody struct {
	Action              *ValidateLicenseeRequestBodyActionEnum `form:"name=action"`
	LicenseeName        *string                                `form:"name=licenseeName"`
	NodeSecret          *string                                `form:"name=nodeSecret"`
	ProductModuleNumber *string                                `form:"name=productModuleNumber"`
	ProductNumber       *string                                `form:"name=productNumber"`
	SessionID           *string                                `form:"name=sessionId"`
}

type ValidateLicenseeSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type ValidateLicenseeRequest struct {
	PathParams ValidateLicenseePathParams
	Request    *ValidateLicenseeRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   ValidateLicenseeSecurity
}

type ValidateLicenseeResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
