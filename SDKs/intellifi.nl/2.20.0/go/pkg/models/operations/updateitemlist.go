package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateItemListPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateItemListRequest struct {
	PathParams UpdateItemListPathParams
	Request    shared.ItemList `request:"mediaType=application/json"`
}

type UpdateItemListResponse struct {
	ContentType             string
	ResponseDefaultResource *shared.ResponseDefaultResource
	StatusCode              int64
}
