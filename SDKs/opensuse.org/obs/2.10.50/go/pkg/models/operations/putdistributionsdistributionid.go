package operations

import (
"openapi/pkg/models/shared")

type PutDistributionsDistributionIDPathParams struct {
    DistributionID int64 `pathParam:"style=simple,explode=false,name=distribution_id"`
    
}

type PutDistributionsDistributionIDSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PutDistributionsDistributionIDRequest struct {
    PathParams PutDistributionsDistributionIDPathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PutDistributionsDistributionIDSecurity 
    
}

type PutDistributionsDistributionIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

