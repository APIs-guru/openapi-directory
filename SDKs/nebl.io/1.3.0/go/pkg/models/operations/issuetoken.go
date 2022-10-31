package operations

import (
"openapi/pkg/models/shared")

type IssueTokenRequest struct {
    Request shared.IssueTokenRequest `request:"mediaType=application/json"`
    
}

type IssueTokenResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    IssueTokenResponse *shared.IssueTokenResponse 
    
}

