package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsIDCertificatesAttrGeneratePathParams struct {
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsIDCertificatesAttrGenerateRequest struct {
    PathParams PostRealmClientsIDCertificatesAttrGeneratePathParams 
    
}

type PostRealmClientsIDCertificatesAttrGenerateResponse struct {
    CertificateRepresentation *shared.CertificateRepresentation 
    ContentType string 
    StatusCode int64 
    
}

