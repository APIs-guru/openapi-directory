package shared

type SchemeBasicAuth struct {
	Authorization string `security:"name=Authorization"`
}

type Security struct {
	BasicAuth SchemeBasicAuth `security:"scheme,type=http,subtype=basic"`
}
