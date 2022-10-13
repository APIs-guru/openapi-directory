package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstantMixFromItemPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstantMixFromItemQueryParams struct {
	EnableImageTypes []shared.ImageTypeEnum  `queryParam:"style=form,explode=true,name=enableImageTypes"`
	EnableImages     *bool                   `queryParam:"style=form,explode=true,name=enableImages"`
	EnableUserData   *bool                   `queryParam:"style=form,explode=true,name=enableUserData"`
	Fields           []shared.ItemFieldsEnum `queryParam:"style=form,explode=true,name=fields"`
	ImageTypeLimit   *int32                  `queryParam:"style=form,explode=true,name=imageTypeLimit"`
	Limit            *int32                  `queryParam:"style=form,explode=true,name=limit"`
	UserID           *string                 `queryParam:"style=form,explode=true,name=userId"`
}

type GetInstantMixFromItemSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type GetInstantMixFromItemRequest struct {
	PathParams  GetInstantMixFromItemPathParams
	QueryParams GetInstantMixFromItemQueryParams
	Security    GetInstantMixFromItemSecurity
}

type GetInstantMixFromItemResponse struct {
	BaseItemDtoQueryResult *shared.BaseItemDtoQueryResult
	ContentType            string
	StatusCode             int64
}
