package operations



type PostRealmAuthenticationExecutionsExecutionIDLowerPriorityPathParams struct {
    ExecutionID string `pathParam:"style=simple,explode=false,name=executionId"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmAuthenticationExecutionsExecutionIDLowerPriorityRequest struct {
    PathParams PostRealmAuthenticationExecutionsExecutionIDLowerPriorityPathParams 
    
}

type PostRealmAuthenticationExecutionsExecutionIDLowerPriorityResponse struct {
    ContentType string 
    StatusCode int64 
    
}

