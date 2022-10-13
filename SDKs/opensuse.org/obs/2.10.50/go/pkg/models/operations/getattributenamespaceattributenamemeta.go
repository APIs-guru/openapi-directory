package operations

import (
	"openapi/pkg/models/shared"
)

type GetAttributeNamespaceAttributeNameMetaPathParams struct {
	AttributeName string `pathParam:"style=simple,explode=false,name=attribute_name"`
	Namespace     string `pathParam:"style=simple,explode=false,name=namespace"`
}

type GetAttributeNamespaceAttributeNameMetaSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type GetAttributeNamespaceAttributeNameMetaRequest struct {
	PathParams GetAttributeNamespaceAttributeNameMetaPathParams
	Security   GetAttributeNamespaceAttributeNameMetaSecurity
}

type GetAttributeNamespaceAttributeNameMetaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
