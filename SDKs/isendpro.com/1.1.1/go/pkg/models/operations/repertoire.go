package operations

import (
"openapi/pkg/models/shared")

type RepertoireRequest struct {
    Request shared.RepertoirEmodifrequest `request:"mediaType=application/json"`
    
}

type RepertoireResponse struct {
    ContentType string 
    Erreur *shared.Erreur 
    RepertoirEmodifreponse *shared.RepertoirEmodifreponse 
    StatusCode int64 
    
}

