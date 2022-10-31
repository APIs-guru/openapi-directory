package operations

import (
"openapi/pkg/models/shared")

type PostAttributeNamespaceMetaPathParams struct {
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    
}

type PostAttributeNamespaceMetaSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PostAttributeNamespaceMetaRequest struct {
    PathParams PostAttributeNamespaceMetaPathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PostAttributeNamespaceMetaSecurity 
    
}

type PostAttributeNamespaceMetaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

