package operations

import (
"openapi/pkg/models/shared")

type RetrieveSentryRiskDataByIDPathParams struct {
    AsteroidID string `pathParam:"style=simple,explode=false,name=asteroid_id"`
    
}

type RetrieveSentryRiskDataByIDRequest struct {
    PathParams RetrieveSentryRiskDataByIDPathParams 
    
}

type RetrieveSentryRiskDataByIDResponse struct {
    ContentType string 
    SentryImpactRiskObject *shared.SentryImpactRiskObject 
    StatusCode int64 
    
}

