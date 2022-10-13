package operations

type GetV1PocsOutputFormatOutputFormatEnum string

const (
	GetV1PocsOutputFormatOutputFormatEnumJSON GetV1PocsOutputFormatOutputFormatEnum = "json"
	GetV1PocsOutputFormatOutputFormatEnumXML  GetV1PocsOutputFormatOutputFormatEnum = "xml"
)

type GetV1PocsOutputFormatPathParams struct {
	OutputFormat GetV1PocsOutputFormatOutputFormatEnum `pathParam:"style=simple,explode=false,name=output_format"`
}

type GetV1PocsOutputFormatQueryParams struct {
	APIKey       string `queryParam:"style=form,explode=true,name=api_key"`
	Jurisdiction string `queryParam:"style=form,explode=true,name=jurisdiction"`
}

type GetV1PocsOutputFormatRequest struct {
	PathParams  GetV1PocsOutputFormatPathParams
	QueryParams GetV1PocsOutputFormatQueryParams
}

type GetV1PocsOutputFormatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
