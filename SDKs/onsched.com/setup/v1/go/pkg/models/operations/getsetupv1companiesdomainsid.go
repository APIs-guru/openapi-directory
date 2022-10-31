package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1CompaniesDomainsIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1CompaniesDomainsIDRequest struct {
    PathParams GetSetupV1CompaniesDomainsIDPathParams 
    
}

type GetSetupV1CompaniesDomainsIDResponse struct {
    CompanyDomainViewModel *shared.CompanyDomainViewModel 
    ContentType string 
    StatusCode int64 
    
}

