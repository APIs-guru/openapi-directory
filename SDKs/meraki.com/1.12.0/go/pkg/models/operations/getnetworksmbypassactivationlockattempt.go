package operations



type GetNetworkSmBypassActivationLockAttemptPathParams struct {
    AttemptID string `pathParam:"style=simple,explode=false,name=attemptId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    
}

type GetNetworkSmBypassActivationLockAttemptRequest struct {
    PathParams GetNetworkSmBypassActivationLockAttemptPathParams 
    
}

type GetNetworkSmBypassActivationLockAttemptResponse struct {
    ContentType string 
    StatusCode int64 
    GetNetworkSmBypassActivationLockAttempt200ApplicationJSONObject map[string]interface{} 
    
}

