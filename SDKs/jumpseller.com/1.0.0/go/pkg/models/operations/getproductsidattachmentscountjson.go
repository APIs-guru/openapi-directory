package operations

type GetProductsIDAttachmentsCountJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsIDAttachmentsCountJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDAttachmentsCountJSONRequest struct {
	PathParams  GetProductsIDAttachmentsCountJSONPathParams
	QueryParams GetProductsIDAttachmentsCountJSONQueryParams
}

type GetProductsIDAttachmentsCountJSONResponse struct {
	ContentType string
	Count       *interface{}
	NotFound    *interface{}
	StatusCode  int64
}
