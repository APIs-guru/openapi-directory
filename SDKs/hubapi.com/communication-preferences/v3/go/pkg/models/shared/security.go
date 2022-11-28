package shared

type SchemeOauth2Legacy struct {
	Authorization string `security:"name=Authorization"`
}

type SchemePrivateAppsLegacy struct {
	APIKey string `security:"name=private-app-legacy"`
}

type SchemeHapikey struct {
	APIKey string `security:"name=hapikey"`
}
