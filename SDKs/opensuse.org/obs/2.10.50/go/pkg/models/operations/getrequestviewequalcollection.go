package operations

import (
"openapi/pkg/models/shared")

type GetRequestViewEqualCollectionQueryParams struct {
    Ids *string `queryParam:"style=form,explode=true,name=ids"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    Package *string `queryParam:"style=form,explode=true,name=package"`
    Project *string `queryParam:"style=form,explode=true,name=project"`
    Roles *string `queryParam:"style=form,explode=true,name=roles"`
    States *string `queryParam:"style=form,explode=true,name=states"`
    Types *string `queryParam:"style=form,explode=true,name=types"`
    User *string `queryParam:"style=form,explode=true,name=user"`
    Withfullhistory *string `queryParam:"style=form,explode=true,name=withfullhistory"`
    Withhistory *string `queryParam:"style=form,explode=true,name=withhistory"`
    
}

type GetRequestViewEqualCollectionSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetRequestViewEqualCollectionRequest struct {
    QueryParams GetRequestViewEqualCollectionQueryParams 
    Security GetRequestViewEqualCollectionSecurity 
    
}

type GetRequestViewEqualCollectionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

