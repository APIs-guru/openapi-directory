package operations

import (
"openapi/pkg/models/shared")
var GetV05HeartbeatServers = []string{
	"https://dev.ndhm.gov.in/hiu",
}

type GetV05HeartbeatRequest struct {
    ServerURL *string 
    
}

type GetV05HeartbeatResponse struct {
    Body []byte 
    ContentType string 
    HeartbeatResponse *shared.HeartbeatResponse 
    StatusCode int64 
    
}

