package shared

type SchemeToken struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	Token SchemeToken `security:"scheme,type=apiKey,subtype=header"`
}
