package operations

import (
"openapi/pkg/models/shared")

type PostLifecycleManyToOneHeaders struct {
    Token *string `header:"style=simple,explode=false,name=Token"`
    
}

type PostLifecycleManyToOneRequests struct {
    LifecycleManyToOneRequest *shared.LifecycleManyToOneRequest `request:"mediaType=application/*+json"`
    LifecycleManyToOneRequest1 *shared.LifecycleManyToOneRequest `request:"mediaType=application/json"`
    LifecycleManyToOneRequest2 *shared.LifecycleManyToOneRequest `request:"mediaType=text/json"`
    
}

type PostLifecycleManyToOneRequest struct {
    Headers PostLifecycleManyToOneHeaders 
    Request *PostLifecycleManyToOneRequests 
    
}

type PostLifecycleManyToOneResponse struct {
    Body []byte 
    ContentType string 
    PlanningLevelDataDto *shared.PlanningLevelDataDto 
    StatusCode int64 
    
}

