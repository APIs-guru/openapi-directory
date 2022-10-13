package shared

type ScreenshotDetails struct {
	CallbackURL *string          `json:"callback_url"`
	DeferTime   *float64         `json:"defer_time"`
	Screenshots []ScreenshotType `json:"screenshots"`
	TestID      *string          `json:"test_id"`
	TestStatus  *string          `json:"test_status"`
	URL         *string          `json:"url"`
}
