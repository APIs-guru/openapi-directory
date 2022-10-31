package operations

type GetProductsStatusStatusCountJSONStatusEnum string

const (
	GetProductsStatusStatusCountJSONStatusEnumAvailable    GetProductsStatusStatusCountJSONStatusEnum = "available"
	GetProductsStatusStatusCountJSONStatusEnumNotAvailable GetProductsStatusStatusCountJSONStatusEnum = "not-available"
	GetProductsStatusStatusCountJSONStatusEnumDisabled     GetProductsStatusStatusCountJSONStatusEnum = "disabled"
)

type GetProductsStatusStatusCountJSONPathParams struct {
	Status GetProductsStatusStatusCountJSONStatusEnum `pathParam:"style=simple,explode=false,name=status"`
}

type GetProductsStatusStatusCountJSONQueryParams struct {
	Authtoken string  `queryParam:"style=form,explode=true,name=authtoken"`
	Locale    *string `queryParam:"style=form,explode=true,name=locale"`
	Login     string  `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsStatusStatusCountJSONRequest struct {
	PathParams  GetProductsStatusStatusCountJSONPathParams
	QueryParams GetProductsStatusStatusCountJSONQueryParams
}

type GetProductsStatusStatusCountJSONResponse struct {
	ContentType   string
	Count         *interface{}
	StatusCode    int64
	StatusInvalid *interface{}
}
