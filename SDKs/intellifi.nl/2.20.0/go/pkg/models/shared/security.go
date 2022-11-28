package shared

type SchemeCookieSid struct {
	APIKey string `security:"name=brain.sid"`
}

type SchemeHeaderAPIKey struct {
	APIKey string `security:"name=X-Api-Key"`
}

type SchemeQueryAPIKey struct {
	APIKey string `security:"name=key"`
}

type Security struct {
	CookieSid    *SchemeCookieSid    `security:"scheme,type=apiKey,subtype=cookie"`
	HeaderAPIKey *SchemeHeaderAPIKey `security:"scheme,type=apiKey,subtype=header"`
	QueryAPIKey  *SchemeQueryAPIKey  `security:"scheme,type=apiKey,subtype=query"`
}
