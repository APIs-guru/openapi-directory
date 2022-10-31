package operations

import (
"openapi/pkg/models/shared")

type SubaccountEditRequest struct {
    Request shared.SubaccountRequest `request:"mediaType=application/json"`
    
}

type SubaccountEditResponse struct {
    ContentType string 
    Erreur *shared.Erreur 
    StatusCode int64 
    SubaccountResponse *shared.SubaccountResponse 
    
}

