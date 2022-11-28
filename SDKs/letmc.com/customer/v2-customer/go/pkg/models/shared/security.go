package shared

type SchemeAPIKey struct {
	APIKey string `security:"name=ApiKey"`
}

type SchemeBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
