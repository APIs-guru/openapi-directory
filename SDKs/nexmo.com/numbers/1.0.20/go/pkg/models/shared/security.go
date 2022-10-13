package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=api_key"`
}

type SchemeAPISecret struct {
	APIKey string `security:"name=api_secret"`
}

type Security struct {
	APIKey    SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	APISecret SchemeAPISecret `security:"scheme,type=apiKey,subtype=query"`
}
