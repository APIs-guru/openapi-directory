package operations

type GetCountryListResponse struct {
	Body          []byte
	ContentType   string
	CountryListVo *interface{}
	HTTPStatusVo  *interface{}
	StatusCode    int64
}
