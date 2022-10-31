package shared



type Dataset struct {
    DataEntry map[string]interface{} `json:"dataEntry,omitempty"`
    Feature map[string]interface{} `json:"feature,omitempty"`
    ModelURI *string `json:"model_uri,omitempty"`
    Query map[string]interface{} `json:"query,omitempty"`
    
}

