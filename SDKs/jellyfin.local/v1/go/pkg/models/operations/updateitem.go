package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemPathParams struct {
	ItemID string `pathParam:"style=simple,explode=false,name=itemId"`
}

type UpdateItemRequestsInput struct {
	BaseItemDto  *shared.BaseItemDtoInput `request:"mediaType=application/*+json"`
	BaseItemDto1 *shared.BaseItemDtoInput `request:"mediaType=application/json"`
	BaseItemDto2 *shared.BaseItemDtoInput `request:"mediaType=text/json"`
}

type UpdateItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateItemRequest struct {
	PathParams UpdateItemPathParams
	Request    UpdateItemRequestsInput
	Security   UpdateItemSecurity
}

type UpdateItemResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
