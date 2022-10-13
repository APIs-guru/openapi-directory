package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemImageIndexPathParams struct {
	ImageIndex int32                `pathParam:"style=simple,explode=false,name=imageIndex"`
	ImageType  shared.ImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	ItemID     string               `pathParam:"style=simple,explode=false,name=itemId"`
}

type UpdateItemImageIndexQueryParams struct {
	NewIndex *int32 `queryParam:"style=form,explode=true,name=newIndex"`
}

type UpdateItemImageIndexSecurity struct {
	CustomAuthentication shared.SchemeCustomAuthentication `security:"scheme,type=apiKey,subtype=header"`
}

type UpdateItemImageIndexRequest struct {
	PathParams  UpdateItemImageIndexPathParams
	QueryParams UpdateItemImageIndexQueryParams
	Security    UpdateItemImageIndexSecurity
}

type UpdateItemImageIndexResponse struct {
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
