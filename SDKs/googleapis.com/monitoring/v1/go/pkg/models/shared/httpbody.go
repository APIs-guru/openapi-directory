package shared

type HTTPBody struct {
	ContentType *string                  `json:"contentType"`
	Data        *string                  `json:"data"`
	Extensions  []map[string]interface{} `json:"extensions"`
}
