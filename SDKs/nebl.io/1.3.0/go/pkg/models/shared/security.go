package shared

type SchemeRPCAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
