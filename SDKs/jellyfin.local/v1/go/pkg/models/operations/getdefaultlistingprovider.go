package operations

import (
	"openapi/pkg/models/shared"
)

type GetDefaultListingProviderSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetDefaultListingProviderRequest struct {
	Security GetDefaultListingProviderSecurity
}

type GetDefaultListingProviderResponse struct {
	ContentType          string
	ListingsProviderInfo *shared.ListingsProviderInfo
	StatusCode           int64
}
