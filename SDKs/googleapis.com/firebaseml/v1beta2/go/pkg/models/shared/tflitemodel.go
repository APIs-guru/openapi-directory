package shared

type TfLiteModel struct {
	AutomlModel  *string `json:"automlModel"`
	GcsTfliteURI *string `json:"gcsTfliteUri"`
	SizeBytes    *string `json:"sizeBytes"`
}
