package shared

type SchemeBearerToken struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	BearerToken SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}
