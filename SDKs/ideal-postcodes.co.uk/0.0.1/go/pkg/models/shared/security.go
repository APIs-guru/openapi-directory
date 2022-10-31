package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=api_key"`
}

type SchemeUserToken struct {
	APIKey string `security:"name=user_token"`
}

type Security struct {
	APIKey    SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	UserToken SchemeUserToken `security:"scheme,type=apiKey,subtype=query"`
}
