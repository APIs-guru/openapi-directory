package operations

import (
"openapi/pkg/models/shared")

type GetSetupV1ResourcesIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetSetupV1ResourcesIDQueryParams struct {
    GoogleAuthReturnURL *string `queryParam:"style=form,explode=true,name=googleAuthReturnUrl"`
    OutlookAuthReturnURL *string `queryParam:"style=form,explode=true,name=outlookAuthReturnUrl"`
    
}

type GetSetupV1ResourcesIDRequest struct {
    PathParams GetSetupV1ResourcesIDPathParams 
    QueryParams GetSetupV1ResourcesIDQueryParams 
    
}

type GetSetupV1ResourcesIDResponse struct {
    ContentType string 
    ResourceViewModel *shared.ResourceViewModel 
    StatusCode int64 
    
}

