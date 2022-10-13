package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttributeNamespaceAttributeNameMetaPathParams struct {
	AttributeName string `pathParam:"style=simple,explode=false,name=attribute_name"`
	Namespace     string `pathParam:"style=simple,explode=false,name=namespace"`
}

type DeleteAttributeNamespaceAttributeNameMetaSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type DeleteAttributeNamespaceAttributeNameMetaRequest struct {
	PathParams DeleteAttributeNamespaceAttributeNameMetaPathParams
	Security   DeleteAttributeNamespaceAttributeNameMetaSecurity
}

type DeleteAttributeNamespaceAttributeNameMetaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
