package operations

import (
"openapi/pkg/models/shared")

type GetDistributionsDistributionIDPathParams struct {
    DistributionID int64 `pathParam:"style=simple,explode=false,name=distribution_id"`
    
}

type GetDistributionsDistributionIDSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetDistributionsDistributionIDRequest struct {
    PathParams GetDistributionsDistributionIDPathParams 
    Security GetDistributionsDistributionIDSecurity 
    
}

type GetDistributionsDistributionIDResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

