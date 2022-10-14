package operations

type MbusAPIResponse struct {
	ContentType string
	StatusCode  int64
	TextError   *string
	Yaml        *string
}
