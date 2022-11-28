package shared

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}

type SchemeBearerAuth struct {
	Authorization string `security:"name=Authorization"`
}
