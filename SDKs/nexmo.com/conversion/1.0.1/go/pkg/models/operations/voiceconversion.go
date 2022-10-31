package operations

type VoiceConversionQueryParams struct {
	Delivered interface{} `queryParam:"style=form,explode=true,name=delivered"`
	MessageID string      `queryParam:"style=form,explode=true,name=message-id"`
	Timestamp string      `queryParam:"style=form,explode=true,name=timestamp"`
}

type VoiceConversionRequest struct {
	QueryParams VoiceConversionQueryParams
}

type VoiceConversionResponse struct {
	ContentType string
	StatusCode  int64
}
