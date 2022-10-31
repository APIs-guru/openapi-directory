package shared

type SchematizedData struct {
	Data  *string `json:"data,omitempty"`
	Error *string `json:"error,omitempty"`
}
