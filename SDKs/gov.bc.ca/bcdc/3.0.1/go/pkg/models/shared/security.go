package shared

type SchemeGithubAccessCode struct {
	Authorization string `security:"name=Authorization"`
}

type SchemeInternalAPIKey struct {
	APIKey string `security:"name=ckan_api_key"`
}

type Security struct {
	GithubAccessCode *SchemeGithubAccessCode `security:"scheme,type=oauth2"`
	InternalAPIKey   *SchemeInternalAPIKey   `security:"scheme,type=apiKey,subtype=header"`
}
