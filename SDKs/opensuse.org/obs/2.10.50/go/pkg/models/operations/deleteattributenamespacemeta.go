package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttributeNamespaceMetaPathParams struct {
	Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
}

type DeleteAttributeNamespaceMetaSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type DeleteAttributeNamespaceMetaRequest struct {
	PathParams DeleteAttributeNamespaceMetaPathParams
	Security   DeleteAttributeNamespaceMetaSecurity
}

type DeleteAttributeNamespaceMetaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
