package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDAttachmentsAttachmentIDJSONPathParams struct {
	AttachmentID int32 `pathParam:"style=simple,explode=false,name=attachment_id"`
	ID           int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsIDAttachmentsAttachmentIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDAttachmentsAttachmentIDJSONRequest struct {
	PathParams  GetProductsIDAttachmentsAttachmentIDJSONPathParams
	QueryParams GetProductsIDAttachmentsAttachmentIDJSONQueryParams
}

type GetProductsIDAttachmentsAttachmentIDJSONResponse struct {
	Attachment  *shared.Attachment
	ContentType string
	NotFound    *interface{}
	StatusCode  int64
}
