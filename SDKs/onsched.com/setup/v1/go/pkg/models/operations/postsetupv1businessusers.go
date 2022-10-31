package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1BusinessusersRequests struct {
    BusinessUserInputModel *shared.BusinessUserInputModel `request:"mediaType=application/*+json"`
    BusinessUserInputModel1 *shared.BusinessUserInputModel `request:"mediaType=application/json"`
    BusinessUserInputModel2 *shared.BusinessUserInputModel `request:"mediaType=application/json-patch+json"`
    BusinessUserInputModel3 *shared.BusinessUserInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1BusinessusersRequest struct {
    Request *PostSetupV1BusinessusersRequests 
    
}

type PostSetupV1BusinessusersResponse struct {
    BusinessUserViewModel *shared.BusinessUserViewModel 
    ContentType string 
    StatusCode int64 
    
}

