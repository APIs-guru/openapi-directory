package operations

import (
	"openapi/pkg/models/shared"
)

type GetAncestorsPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type GetAncestorsQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetAncestorsSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetAncestorsRequest struct {
	PathParams  GetAncestorsPathParams
	QueryParams GetAncestorsQueryParams
	Security    GetAncestorsSecurity
}

type GetAncestorsResponse struct {
	BaseItemDtos   []shared.BaseItemDto
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
