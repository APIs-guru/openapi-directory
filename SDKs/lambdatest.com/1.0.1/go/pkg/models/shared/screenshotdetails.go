package shared



type ScreenshotDetails struct {
    CallbackURL *string `json:"callback_url,omitempty"`
    DeferTime *float64 `json:"defer_time,omitempty"`
    Screenshots []ScreenshotType `json:"screenshots,omitempty"`
    TestID *string `json:"test_id,omitempty"`
    TestStatus *string `json:"test_status,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

