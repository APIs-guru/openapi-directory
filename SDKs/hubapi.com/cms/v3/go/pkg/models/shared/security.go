package shared

type SchemeHapikey struct {
	APIKey string `security:"name=hapikey"`
}
