package operations

type GetFormatEnum string

const (
	GetFormatEnumJSON GetFormatEnum = "json"
	GetFormatEnumXML  GetFormatEnum = "xml"
)

type GetQueryParams struct {
	Format  *GetFormatEnum `queryParam:"style=form,explode=true,name=format"`
	IP      string         `queryParam:"style=form,explode=true,name=ip"`
	Key     string         `queryParam:"style=form,explode=true,name=key"`
	Package *string        `queryParam:"style=form,explode=true,name=package"`
}

type GetRequest struct {
	QueryParams GetQueryParams
}

type GetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
