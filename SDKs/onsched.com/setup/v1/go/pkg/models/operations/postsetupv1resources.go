package operations

import (
"openapi/pkg/models/shared")

type PostSetupV1ResourcesQueryParams struct {
    GoogleAuthReturnURL *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
    OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
    
}

type PostSetupV1ResourcesRequests struct {
    ResourceInputModel *shared.ResourceInputModel `request:"mediaType=application/*+json"`
    ResourceInputModel1 *shared.ResourceInputModel `request:"mediaType=application/json"`
    ResourceInputModel2 *shared.ResourceInputModel `request:"mediaType=application/json-patch+json"`
    ResourceInputModel3 *shared.ResourceInputModel `request:"mediaType=text/json"`
    
}

type PostSetupV1ResourcesRequest struct {
    QueryParams PostSetupV1ResourcesQueryParams 
    Request *PostSetupV1ResourcesRequests 
    
}

type PostSetupV1ResourcesResponse struct {
    ContentType string 
    ResourceViewModel *shared.ResourceViewModel 
    StatusCode int64 
    
}

