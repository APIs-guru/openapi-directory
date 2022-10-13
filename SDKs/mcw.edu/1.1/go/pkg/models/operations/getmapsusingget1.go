package operations

type GetMapsUsingGet1PathParams struct {
	AccID string `pathParam:"style=simple,explode=false,name=accId"`
}

type GetMapsUsingGet1Request struct {
	PathParams GetMapsUsingGet1PathParams
}

type GetMapsUsingGet1Response struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
