package shared

type SchemeBearer struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeCookie struct {
	APIKey string `security:"name=mercureAuthorization"`
}

type Security struct {
	Bearer *SchemeBearer `security:"scheme,type=http,subtype=bearer"`
	Cookie *SchemeCookie `security:"scheme,type=apiKey,subtype=cookie"`
}
