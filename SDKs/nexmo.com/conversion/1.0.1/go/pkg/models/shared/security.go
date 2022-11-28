package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=api_key"`
}

type SchemeAPISecret struct {
	APIKey string `security:"name=api_secret"`
}

type SecurityOption1 struct {
	APIKey    SchemeAPIKey    `security:"scheme,type=apiKey,subtype=query"`
	APISecret SchemeAPISecret `security:"scheme,type=apiKey,subtype=query"`
}

type SchemeAPISig struct {
	APIKey string `security:"name=sig"`
}

type SecurityOption2 struct {
	APIKey SchemeAPIKey `security:"scheme,type=apiKey,subtype=query"`
	APISig SchemeAPISig `security:"scheme,type=apiKey,subtype=query"`
}

type Security struct {
	Option1 *SecurityOption1 `security:"option"`
	Option2 *SecurityOption2 `security:"option"`
}
