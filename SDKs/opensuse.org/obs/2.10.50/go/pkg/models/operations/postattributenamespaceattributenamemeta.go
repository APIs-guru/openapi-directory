package operations

import (
"openapi/pkg/models/shared")

type PostAttributeNamespaceAttributeNameMetaPathParams struct {
    AttributeName string `pathParam:"style=simple,explode=false,name=attribute_name"`
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    
}

type PostAttributeNamespaceAttributeNameMetaSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type PostAttributeNamespaceAttributeNameMetaRequest struct {
    PathParams PostAttributeNamespaceAttributeNameMetaPathParams 
    Request []byte `request:"mediaType=application/xml"`
    Security PostAttributeNamespaceAttributeNameMetaSecurity 
    
}

type PostAttributeNamespaceAttributeNameMetaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

