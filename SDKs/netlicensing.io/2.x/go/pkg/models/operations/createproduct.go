package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductRequestBodyVatModeEnum string

const (
	CreateProductRequestBodyVatModeEnumGross CreateProductRequestBodyVatModeEnum = "GROSS"
	CreateProductRequestBodyVatModeEnumNet   CreateProductRequestBodyVatModeEnum = "NET"
)

type CreateProductRequestBody struct {
	Active             bool                                 `form:"name=active"`
	Description        *string                              `form:"name=description"`
	LicenseeAutoCreate *bool                                `form:"name=licenseeAutoCreate"`
	LicensingInfo      *string                              `form:"name=licensingInfo"`
	Name               string                               `form:"name=name"`
	Number             *string                              `form:"name=number"`
	VatMode            *CreateProductRequestBodyVatModeEnum `form:"name=vatMode"`
	Version            string                               `form:"name=version"`
}

type CreateProductSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateProductRequest struct {
	Request  *CreateProductRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateProductSecurity
}

type CreateProductResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
