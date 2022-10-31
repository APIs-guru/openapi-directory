package operations

import (
"openapi/pkg/models/shared")

type DeleteAttributeNamespacePathParams struct {
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    
}

type DeleteAttributeNamespaceSecurity struct {
    BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteAttributeNamespaceRequest struct {
    PathParams DeleteAttributeNamespacePathParams 
    Security DeleteAttributeNamespaceSecurity 
    
}

type DeleteAttributeNamespaceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

