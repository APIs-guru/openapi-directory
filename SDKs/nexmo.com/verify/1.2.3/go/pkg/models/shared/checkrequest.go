package shared



type CheckRequest struct {
    APIKey string `form:"name=api_key"`
    APISecret string `form:"name=api_secret"`
    Code string `form:"name=code"`
    IPAddress *string `form:"name=ip_address"`
    RequestID string `form:"name=request_id"`
    
}

