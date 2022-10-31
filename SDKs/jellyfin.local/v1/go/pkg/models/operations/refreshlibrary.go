package operations

import (
	"openapi/pkg/models/shared"
)

type RefreshLibrarySecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type RefreshLibraryRequest struct {
	Security RefreshLibrarySecurity
}

type RefreshLibraryResponse struct {
	ContentType string
	StatusCode  int64
}
