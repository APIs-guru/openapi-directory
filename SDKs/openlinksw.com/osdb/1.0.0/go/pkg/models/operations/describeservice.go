package operations

import (
"openapi/pkg/models/shared")

type DescribeServicePathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type DescribeServiceRequest struct {
    PathParams DescribeServicePathParams 
    
}

type DescribeServiceResponse struct {
    ContentType string 
    DescribeServiceResponse *shared.DescribeServiceResponse 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

