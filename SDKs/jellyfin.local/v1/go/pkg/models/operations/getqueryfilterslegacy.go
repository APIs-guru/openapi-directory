package operations

import (
	"openapi/pkg/models/shared"
)

type GetQueryFiltersLegacyQueryParams struct {
	IncludeItemTypes []string `queryParam:"style=form,explode=true,name=includeItemTypes"`
	MediaTypes       []string `queryParam:"style=form,explode=true,name=mediaTypes"`
	ParentID         *string  `queryParam:"style=form,explode=true,name=parentId"`
	UserID           *string  `queryParam:"style=form,explode=true,name=userId"`
}

type GetQueryFiltersLegacySecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetQueryFiltersLegacyRequest struct {
	QueryParams GetQueryFiltersLegacyQueryParams
	Security    GetQueryFiltersLegacySecurity
}

type GetQueryFiltersLegacyResponse struct {
	ContentType        string
	QueryFiltersLegacy *shared.QueryFiltersLegacy
	StatusCode         int64
}
