package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type UpdateLicensePathParams struct {
	LicenseNumber string `pathParam:"style=simple,explode=false,name=licenseNumber"`
}

type UpdateLicenseRequestBody struct {
	Active           *bool      `form:"name=active"`
	Currency         *string    `form:"name=currency"`
	Hidden           *bool      `form:"name=hidden"`
	Name             *string    `form:"name=name"`
	Number           *string    `form:"name=number"`
	Parentfeature    *string    `form:"name=parentfeature"`
	Price            *float64   `form:"name=price"`
	Quantity         *string    `form:"name=quantity"`
	StartDate        *time.Time `form:"name=startDate"`
	TimeVolume       *string    `form:"name=timeVolume"`
	TimeVolumePeriod *string    `form:"name=timeVolumePeriod"`
	UsedQuantity     *string    `form:"name=usedQuantity"`
}

type UpdateLicenseSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type UpdateLicenseRequest struct {
	PathParams UpdateLicensePathParams
	Request    *UpdateLicenseRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateLicenseSecurity
}

type UpdateLicenseResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
