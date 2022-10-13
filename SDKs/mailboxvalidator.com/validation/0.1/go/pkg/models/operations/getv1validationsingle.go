package operations

type GetV1ValidationSingleFormatEnum string

const (
	GetV1ValidationSingleFormatEnumJSON GetV1ValidationSingleFormatEnum = "json"
	GetV1ValidationSingleFormatEnumXML  GetV1ValidationSingleFormatEnum = "xml"
)

type GetV1ValidationSingleQueryParams struct {
	Email  string                           `queryParam:"style=form,explode=true,name=email"`
	Format *GetV1ValidationSingleFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Key    string                           `queryParam:"style=form,explode=true,name=key"`
}

type GetV1ValidationSingleRequest struct {
	QueryParams GetV1ValidationSingleQueryParams
}

type GetV1ValidationSingleResponse struct {
	ContentType                                   string
	GetV1ValidationSingle200ApplicationJSONString *string
	StatusCode                                    int64
}
