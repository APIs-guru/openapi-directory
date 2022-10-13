package operations

type ConvertRequestBodyValidateEnum string

const (
	ConvertRequestBodyValidateEnumOn ConvertRequestBodyValidateEnum = "on"
)

type ConvertRequestBody struct {
	Filename *string                         `multipartForm:"name=filename"`
	Source   *string                         `multipartForm:"name=source"`
	Validate *ConvertRequestBodyValidateEnum `multipartForm:"name=validate"`
}

type ConvertRequest struct {
	Request *ConvertRequestBody `request:"mediaType=multipart/form-data"`
}

type ConvertResponse struct {
	Body                         []byte
	ContentType                  string
	StatusCode                   int64
	Convert200ApplicationJSONAny *interface{}
	Convert400ApplicationJSONAny *interface{}
}
