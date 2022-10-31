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

type SecurityOption1 struct {
	CookieSid SchemeCookieSid `security:"scheme,type=apiKey,subtype=cookie"`
}

type SecurityOption2 struct {
	HeaderAPIKey SchemeHeaderAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SecurityOption3 struct {
	QueryAPIKey SchemeQueryAPIKey `security:"scheme,type=apiKey,subtype=query"`
}

type Security struct {
	Option1 *SecurityOption1 `security:"option"`
	Option2 *SecurityOption2 `security:"option"`
	Option3 *SecurityOption3 `security:"option"`
}
