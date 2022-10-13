package shared

type Dataset struct {
	DataEntry map[string]interface{} `json:"dataEntry"`
	Feature   map[string]interface{} `json:"feature"`
	ModelURI  *string                `json:"model_uri"`
	Query     map[string]interface{} `json:"query"`
}
