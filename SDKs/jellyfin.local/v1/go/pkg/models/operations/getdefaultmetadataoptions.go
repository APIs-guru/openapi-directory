package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultMetadataOptionsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetDefaultMetadataOptionsRequest struct {
	Security GetDefaultMetadataOptionsSecurity
}

type GetDefaultMetadataOptionsResponse struct {
	ContentType     string
	MetadataOptions *shared.MetadataOptions
	StatusCode      int64
}
