package operations

import (
	"openapi/pkg/models/shared"
)

type PostPromotionsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostPromotionsJSONRequest struct {
	QueryParams PostPromotionsJSONQueryParams
	Request     shared.PromotionEdit `request:"mediaType=application/json"`
}

type PostPromotionsJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Promotion   *shared.Promotion
	StatusCode  int64
}
