package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemContentTypePathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type UpdateItemContentTypeQueryParams struct {
	ContentType *string `queryParam:"style=form,explode=true,name=contentType"`
}

type UpdateItemContentTypeSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateItemContentTypeRequest struct {
	PathParams  UpdateItemContentTypePathParams
	QueryParams UpdateItemContentTypeQueryParams
	Security    UpdateItemContentTypeSecurity
}

type UpdateItemContentTypeResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
