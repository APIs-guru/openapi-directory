package operations

type HeadCommercialCreditCardsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type HeadCommercialCreditCardsRequest struct {
	Headers HeadCommercialCreditCardsHeaders
}

type HeadCommercialCreditCardsResponse struct {
	ContentType string
	NoResponse  map[string]interface{}
	StatusCode  int64
}
