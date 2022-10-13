package operations

type HatResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	Hat         *interface{}
}
