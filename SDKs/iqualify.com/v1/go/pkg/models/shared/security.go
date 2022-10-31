package shared

type SchemeAuthorization struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	Authorization SchemeAuthorization `security:"scheme,type=apiKey,subtype=header"`
}
