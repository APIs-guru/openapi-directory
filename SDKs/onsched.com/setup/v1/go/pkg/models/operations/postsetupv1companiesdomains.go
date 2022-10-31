package operations

import (
	"openapi/pkg/models/shared"
)

type PostSetupV1CompaniesDomainsRequests struct {
	CompanyDomainInputModel  *shared.CompanyDomainInputModel `request:"mediaType=application/*+json"`
	CompanyDomainInputModel1 *shared.CompanyDomainInputModel `request:"mediaType=application/json"`
	CompanyDomainInputModel2 *shared.CompanyDomainInputModel `request:"mediaType=application/json-patch+json"`
	CompanyDomainInputModel3 *shared.CompanyDomainInputModel `request:"mediaType=text/json"`
}

type PostSetupV1CompaniesDomainsRequest struct {
	Request *PostSetupV1CompaniesDomainsRequests
}

type PostSetupV1CompaniesDomainsResponse struct {
	CompanyDomainViewModel *shared.CompanyDomainViewModel
	ContentType            string
	StatusCode             int64
}
