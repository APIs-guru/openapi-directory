package operations

type HatResponse struct {
	ContentType string
	StatusCode  int64
	Hat         *interface{}
	TextError   *string
}
