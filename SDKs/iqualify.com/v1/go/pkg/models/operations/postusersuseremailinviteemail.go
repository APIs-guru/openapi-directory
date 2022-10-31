package operations

import (
"openapi/pkg/models/shared")

type PostUsersUserEmailInviteEmailPathParams struct {
    UserEmail string `pathParam:"style=simple,explode=false,name=userEmail"`
    
}

type PostUsersUserEmailInviteEmailRequest struct {
    PathParams PostUsersUserEmailInviteEmailPathParams 
    
}

type PostUsersUserEmailInviteEmailResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

