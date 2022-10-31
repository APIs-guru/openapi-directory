package shared



type ScreenshotType struct {
    ActivityID *string `json:"activity_id,omitempty"`
    Browser *string `json:"browser,omitempty"`
    BrowserVersion *string `json:"browser_version,omitempty"`
    Os *string `json:"os,omitempty"`
    Resolution *string `json:"resolution,omitempty"`
    ScreenshotURL *string `json:"screenshot_url,omitempty"`
    Status *string `json:"status,omitempty"`
    ThumbnailURL *string `json:"thumbnail_url,omitempty"`
    
}

