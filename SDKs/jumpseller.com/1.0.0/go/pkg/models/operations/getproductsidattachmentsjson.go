package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDAttachmentsJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsIDAttachmentsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDAttachmentsJSONRequest struct {
	PathParams  GetProductsIDAttachmentsJSONPathParams
	QueryParams GetProductsIDAttachmentsJSONQueryParams
}

type GetProductsIDAttachmentsJSONResponse struct {
	Attachments []shared.Attachment
	ContentType string
	NotFound    *interface{}
	StatusCode  int64
}
