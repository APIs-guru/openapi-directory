package operations

import (
"openapi/pkg/models/shared")

type DescribeActionPathParams struct {
    ActionID string `pathParam:"style=simple,explode=false,name=actionId"`
    ServiceID string `pathParam:"style=simple,explode=false,name=serviceId"`
    
}

type DescribeActionRequest struct {
    PathParams DescribeActionPathParams 
    
}

type DescribeActionResponse struct {
    ContentType string 
    DescribeActionResponse *shared.DescribeActionResponse 
    ErrorModel *shared.ErrorModel 
    StatusCode int64 
    
}

