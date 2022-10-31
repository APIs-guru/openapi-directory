package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1CompaniesRequests struct {
    CompanyInputModel *shared.CompanyInputModel `request:"mediaType=application/*+json"`
    CompanyInputModel1 *shared.CompanyInputModel `request:"mediaType=application/json"`
    CompanyInputModel2 *shared.CompanyInputModel `request:"mediaType=application/json-patch+json"`
    CompanyInputModel3 *shared.CompanyInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1CompaniesRequest struct {
    Request *PostSetupV1CompaniesRequests 
    
}

type PostSetupV1CompaniesResponse struct {
    CompanyViewModel *shared.CompanyViewModel 
    ContentType string 
    StatusCode int64 
    
}

