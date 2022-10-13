package shared

type ScreenshotType struct {
	ActivityID     *string `json:"activity_id"`
	Browser        *string `json:"browser"`
	BrowserVersion *string `json:"browser_version"`
	Os             *string `json:"os"`
	Resolution     *string `json:"resolution"`
	ScreenshotURL  *string `json:"screenshot_url"`
	Status         *string `json:"status"`
	ThumbnailURL   *string `json:"thumbnail_url"`
}
