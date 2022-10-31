package operations

import (
	"openapi/pkg/models/shared"
)

type GetMetadataEditorInfoPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetMetadataEditorInfoSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetMetadataEditorInfoRequest struct {
	PathParams GetMetadataEditorInfoPathParams
	Security   GetMetadataEditorInfoSecurity
}

type GetMetadataEditorInfoResponse struct {
	ContentType        string
	MetadataEditorInfo *shared.MetadataEditorInfo
	ProblemDetails     map[string]interface{}
	StatusCode         int64
}
