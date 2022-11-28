package shared

type SchemeOtoroshiAuth struct {
	Password string `security:"name=password"`
	Username string `security:"name=username"`
}
