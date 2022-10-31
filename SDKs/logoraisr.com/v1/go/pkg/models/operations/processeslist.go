package operations

import (
"openapi/pkg/models/shared")

type ProcessesListResponse struct {
    ContentType string 
    Process *shared.Process 
    StatusCode int64 
    
}

