package shared

type SchemeBasicAuth struct {
	Authorization string `security:"name=Authorization"`
}
