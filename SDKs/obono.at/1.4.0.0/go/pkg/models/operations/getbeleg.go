package operations

import (
"openapi/pkg/models/shared")

type GetBelegPathParams struct {
    BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
    RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
    
}

type GetBelegRequest struct {
    PathParams GetBelegPathParams 
    
}

type GetBelegResponse struct {
    Beleg *shared.Beleg 
    ContentType string 
    StatusCode int64 
    
}

