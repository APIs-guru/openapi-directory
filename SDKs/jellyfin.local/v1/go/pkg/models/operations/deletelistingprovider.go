package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteListingProviderQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type DeleteListingProviderSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type DeleteListingProviderRequest struct {
	QueryParams DeleteListingProviderQueryParams
	Security    DeleteListingProviderSecurity
}

type DeleteListingProviderResponse struct {
	ContentType string
	StatusCode  int64
}
