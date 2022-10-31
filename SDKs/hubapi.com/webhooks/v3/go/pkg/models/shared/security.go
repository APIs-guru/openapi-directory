package shared

type SchemeDeveloperHapikey struct {
	APIKey string `security:"name=hapikey"`
}
