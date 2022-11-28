package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=apiKey"`
}

type SchemeAccessToken struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	APIKey      *SchemeAPIKey      `security:"scheme,type=apiKey,subtype=query"`
	AccessToken *SchemeAccessToken `security:"scheme,type=http,subtype=bearer"`
}
