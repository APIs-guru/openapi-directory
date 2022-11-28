package shared

type SchemeJwt struct {
	APIKey string `security:"name=Authorization"`
}

type Security struct {
	Jwt SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
}

type SchemeBasicAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
