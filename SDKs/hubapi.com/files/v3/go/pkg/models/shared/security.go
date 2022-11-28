package shared

type SchemeHapikey struct {
	APIKey string `security:"name=hapikey"`
}

type SchemeOauth2Legacy struct {
	Authorization string `security:"name=Authorization"`
}

type SchemePrivateAppsLegacy struct {
	APIKey string `security:"name=private-app-legacy"`
}
