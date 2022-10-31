package operations

import (
"openapi/pkg/models/shared")

type GetAttributeNamespacePathParams struct {
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    
}

type GetAttributeNamespaceSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type GetAttributeNamespaceRequest struct {
    PathParams GetAttributeNamespacePathParams 
    Security GetAttributeNamespaceSecurity 
    
}

type GetAttributeNamespaceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

