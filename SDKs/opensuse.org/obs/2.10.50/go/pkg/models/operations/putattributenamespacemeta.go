package operations

import (
"openapi/pkg/models/shared")

type PutAttributeNamespaceMetaPathParams struct {
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    
}

type PutAttributeNamespaceMetaSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PutAttributeNamespaceMetaRequest struct {
    PathParams PutAttributeNamespaceMetaPathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PutAttributeNamespaceMetaSecurity 
    
}

type PutAttributeNamespaceMetaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

