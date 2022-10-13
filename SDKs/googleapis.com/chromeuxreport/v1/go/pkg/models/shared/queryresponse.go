package shared

type QueryResponse struct {
	Record                  *Record           `json:"record"`
	URLNormalizationDetails *URLNormalization `json:"urlNormalizationDetails"`
}
