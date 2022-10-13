package operations

import (
	"openapi/pkg/models/shared"
)

type PutAttributeNamespaceAttributeNameMetaPathParams struct {
	AttributeName string `pathParam:"style=simple,explode=false,name=attribute_name"`
	Namespace     string `pathParam:"style=simple,explode=false,name=namespace"`
}

type PutAttributeNamespaceAttributeNameMetaSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PutAttributeNamespaceAttributeNameMetaRequest struct {
	PathParams PutAttributeNamespaceAttributeNameMetaPathParams
	Request    []byte `request:"mediaType=application/xml"`
	Security   PutAttributeNamespaceAttributeNameMetaSecurity
}

type PutAttributeNamespaceAttributeNameMetaResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
