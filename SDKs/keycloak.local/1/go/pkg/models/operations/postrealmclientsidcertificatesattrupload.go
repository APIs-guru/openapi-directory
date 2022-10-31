package operations

import (
"openapi/pkg/models/shared")

type PostRealmClientsIDCertificatesAttrUploadPathParams struct {
    Attr string `pathParam:"style=simple,explode=false,name=attr"`
    ID string `pathParam:"style=simple,explode=false,name=id"`
    Realm string `pathParam:"style=simple,explode=false,name=realm"`
    
}

type PostRealmClientsIDCertificatesAttrUploadRequest struct {
    PathParams PostRealmClientsIDCertificatesAttrUploadPathParams 
    
}

type PostRealmClientsIDCertificatesAttrUploadResponse struct {
    CertificateRepresentation *shared.CertificateRepresentation 
    ContentType string 
    StatusCode int64 
    
}

