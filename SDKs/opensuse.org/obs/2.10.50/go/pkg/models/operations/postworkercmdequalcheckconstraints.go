package operations

import (
"openapi/pkg/models/shared")

type PostWorkerCmdEqualCheckconstraintsQueryParams struct {
    Arch string `queryParam:"style=form,explode=true,name=arch"`
    Package string `queryParam:"style=form,explode=true,name=package"`
    Project string `queryParam:"style=form,explode=true,name=project"`
    Repository string `queryParam:"style=form,explode=true,name=repository"`
    
}

type PostWorkerCmdEqualCheckconstraintsSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PostWorkerCmdEqualCheckconstraintsRequest struct {
    QueryParams PostWorkerCmdEqualCheckconstraintsQueryParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PostWorkerCmdEqualCheckconstraintsSecurity 
    
}

type PostWorkerCmdEqualCheckconstraintsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

