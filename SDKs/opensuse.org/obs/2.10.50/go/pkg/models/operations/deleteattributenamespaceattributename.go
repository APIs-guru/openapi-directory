package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAttributeNamespaceAttributeNamePathParams struct {
	AttributeName string `pathParam:"style=simple,explode=false,name=attribute_name"`
	Namespace     string `pathParam:"style=simple,explode=false,name=namespace"`
}

type DeleteAttributeNamespaceAttributeNameSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type DeleteAttributeNamespaceAttributeNameRequest struct {
	PathParams DeleteAttributeNamespaceAttributeNamePathParams
	Security   DeleteAttributeNamespaceAttributeNameSecurity
}

type DeleteAttributeNamespaceAttributeNameResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
