package operations

import (
	"openapi/pkg/models/shared"
)

type IpamPrefixesCreateRequest struct {
	Request shared.WritablePrefixInput `request:"mediaType=application/json"`
}

type IpamPrefixesCreateResponse struct {
	ContentType string
	Prefix      *shared.Prefix
	StatusCode  int64
}
