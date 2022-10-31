package operations

type GetV1EmailFreeFormatEnum string

const (
	GetV1EmailFreeFormatEnumJSON GetV1EmailFreeFormatEnum = "json"
	GetV1EmailFreeFormatEnumXML  GetV1EmailFreeFormatEnum = "xml"
)

type GetV1EmailFreeQueryParams struct {
	Email  string                    `queryParam:"style=form,explode=true,name=email"`
	Format *GetV1EmailFreeFormatEnum `queryParam:"style=form,explode=true,name=format"`
	Key    string                    `queryParam:"style=form,explode=true,name=key"`
}

type GetV1EmailFreeRequest struct {
	QueryParams GetV1EmailFreeQueryParams
}

type GetV1EmailFreeResponse struct {
	ContentType                            string
	GetV1EmailFree200ApplicationJSONString *string
	StatusCode                             int64
}
