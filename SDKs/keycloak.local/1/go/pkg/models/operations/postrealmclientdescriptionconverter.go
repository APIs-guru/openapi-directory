package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientDescriptionConverterPathParams struct {
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientDescriptionConverterRequest struct {
    PathParams PostRealmClientDescriptionConverterPathParams 
    Request string `request:"mediaType=text/plain"`
    
}

type PostRealmClientDescriptionConverterResponse struct {
    ClientRepresentation *shared.ClientRepresentation 
    ContentType string 
    StatusCode int64 
    
}

