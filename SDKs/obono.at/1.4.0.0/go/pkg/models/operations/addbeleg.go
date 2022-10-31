package operations

import (
"openapi/pkg/models/shared")

type AddBelegPathParams struct {
    BelegUUID string `pathParam:"style=simple,explode=false,name=belegUuid"`
    RegistrierkasseUUID string `pathParam:"style=simple,explode=false,name=registrierkasseUuid"`
    
}

type AddBelegRequest struct {
    PathParams AddBelegPathParams 
    Request shared.Belegdaten `request:"mediaType=application/json"`
    
}

type AddBelegResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

