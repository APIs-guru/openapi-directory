package operations

import (
	"openapi/pkg/models/shared"
)

type CreateProductModuleRequestBodyLicenseTemplateEnum string

const (
	CreateProductModuleRequestBodyLicenseTemplateEnumTimevolume CreateProductModuleRequestBodyLicenseTemplateEnum = "TIMEVOLUME"
	CreateProductModuleRequestBodyLicenseTemplateEnumFeature    CreateProductModuleRequestBodyLicenseTemplateEnum = "FEATURE"
)

type CreateProductModuleRequestBodyNodeSecretModeEnum string

const (
	CreateProductModuleRequestBodyNodeSecretModeEnumPredefined CreateProductModuleRequestBodyNodeSecretModeEnum = "PREDEFINED"
	CreateProductModuleRequestBodyNodeSecretModeEnumClient     CreateProductModuleRequestBodyNodeSecretModeEnum = "CLIENT"
)

type CreateProductModuleRequestBody struct {
	Active              bool                                                `form:"name=active"`
	LicenseTemplate     []CreateProductModuleRequestBodyLicenseTemplateEnum `form:"name=licenseTemplate"`
	LicensingModel      string                                              `form:"name=licensingModel"`
	MaxCheckoutValidity *int32                                              `form:"name=maxCheckoutValidity"`
	Name                string                                              `form:"name=name"`
	NodeSecretMode      []CreateProductModuleRequestBodyNodeSecretModeEnum  `form:"name=nodeSecretMode"`
	Number              *string                                             `form:"name=number"`
	ProductNumber       string                                              `form:"name=productNumber"`
	RedThreshold        *int32                                              `form:"name=redThreshold"`
	YellowThreshold     *int32                                              `form:"name=yellowThreshold"`
}

type CreateProductModuleSecurity struct {
	BasicAuth shared.SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}

type CreateProductModuleRequest struct {
	Request  CreateProductModuleRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security CreateProductModuleSecurity
}

type CreateProductModuleResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	Netlicensing *interface{}
}
