package shared

type SchemeAccessToken struct {
	Authorization string `security:"name=Authorization"`
}
