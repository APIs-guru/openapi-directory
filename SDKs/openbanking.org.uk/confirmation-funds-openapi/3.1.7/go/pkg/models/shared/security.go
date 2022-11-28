package shared

type SchemeTppoAuth2Security struct {
	Authorization string `security:"name=Authorization"`
}

type SchemePsuoAuth2Security struct {
	Authorization string `security:"name=Authorization"`
}
