package operations

import (
	"openapi/pkg/models/shared"
)

type PutSetupV1CompaniesRequests struct {
	CompanyUpdateModel  *shared.CompanyUpdateModel `request:"mediaType=application/*+json"`
	CompanyUpdateModel1 *shared.CompanyUpdateModel `request:"mediaType=application/json"`
	CompanyUpdateModel2 *shared.CompanyUpdateModel `request:"mediaType=application/json-patch+json"`
	CompanyUpdateModel3 *shared.CompanyUpdateModel `request:"mediaType=text/json"`
}

type PutSetupV1CompaniesRequest struct {
	Request *PutSetupV1CompaniesRequests
}

type PutSetupV1CompaniesResponse struct {
	CompanyViewModel *shared.CompanyViewModel
	ContentType      string
	StatusCode       int64
}
