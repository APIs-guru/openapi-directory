package operations

import (
"openapi/pkg/models/shared")

type GetAttributeNamespaceMetaPathParams struct {
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    
}

type GetAttributeNamespaceMetaSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetAttributeNamespaceMetaRequest struct {
    PathParams GetAttributeNamespaceMetaPathParams 
    Security GetAttributeNamespaceMetaSecurity 
    
}

type GetAttributeNamespaceMetaResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

