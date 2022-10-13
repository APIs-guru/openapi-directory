package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type UpdateItemRequests struct {
	BaseItemDto  *shared.BaseItemDto `request:"mediaType=application/*+json"`
	BaseItemDto1 *shared.BaseItemDto `request:"mediaType=application/json"`
	BaseItemDto2 *shared.BaseItemDto `request:"mediaType=text/json"`
}

type UpdateItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateItemRequest struct {
	PathParams UpdateItemPathParams
	Request    UpdateItemRequests
	Security   UpdateItemSecurity
}

type UpdateItemResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
