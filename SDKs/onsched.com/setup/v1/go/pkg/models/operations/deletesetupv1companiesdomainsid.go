package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSetupV1CompaniesDomainsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteSetupV1CompaniesDomainsIDRequest struct {
	PathParams DeleteSetupV1CompaniesDomainsIDPathParams
}

type DeleteSetupV1CompaniesDomainsIDResponse struct {
	CompanyDomainViewModel *shared.CompanyDomainViewModel
	ContentType            string
	StatusCode             int64
}
