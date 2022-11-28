package shared

type SchemeBasicAuthentication struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
