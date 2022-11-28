package shared

type SchemeHTTPBasic struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
