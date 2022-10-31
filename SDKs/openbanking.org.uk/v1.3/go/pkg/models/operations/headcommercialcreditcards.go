package operations

type HeadCommercialCreditCardsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	IfNoneMatch     *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type HeadCommercialCreditCardsRequest struct {
	Headers HeadCommercialCreditCardsHeaders
}

type HeadCommercialCreditCardsResponse struct {
	ContentType string
	NoResponse  map[string]interface{}
	StatusCode  int64
}
