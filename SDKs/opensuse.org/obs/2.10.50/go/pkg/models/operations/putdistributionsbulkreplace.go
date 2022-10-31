package operations

import (
	"openapi/pkg/models/shared"
)

type PutDistributionsBulkReplaceSecurity struct {
	BasicAuthentication shared.SchemeBasicAuthentication `security:"scheme,type=http,subtype=basic"`
}

type PutDistributionsBulkReplaceRequest struct {
	Request  []byte `request:"mediaType=application/xml"`
	Security PutDistributionsBulkReplaceSecurity
}

type PutDistributionsBulkReplaceResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
