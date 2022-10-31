package operations

import (
"openapi/pkg/models/shared")

type PutSetupV1CompaniesDomainsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type PutSetupV1CompaniesDomainsIDRequests struct {
    CompanyDomainUpdateModel *shared.CompanyDomainUpdateModel `request:"mediaType=application/*+json"`
    CompanyDomainUpdateModel1 *shared.CompanyDomainUpdateModel `request:"mediaType=application/json"`
    CompanyDomainUpdateModel2 *shared.CompanyDomainUpdateModel `request:"mediaType=application/json-patch+json"`
    CompanyDomainUpdateModel3 *shared.CompanyDomainUpdateModel `request:"mediaType=text/json"`
    
}

type PutSetupV1CompaniesDomainsIDRequest struct {
    PathParams PutSetupV1CompaniesDomainsIDPathParams 
    Request *PutSetupV1CompaniesDomainsIDRequests 
    
}

type PutSetupV1CompaniesDomainsIDResponse struct {
    CompanyDomainViewModel *shared.CompanyDomainViewModel 
    ContentType string 
    StatusCode int64 
    
}

