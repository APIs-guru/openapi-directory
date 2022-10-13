package shared

type SchemeXMathtoolsAPISecret struct {
	APIKey string `security:"name=X-Mathtools-Api-Secret"`
}
