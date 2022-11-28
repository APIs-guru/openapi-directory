package shared

// WatchSettings
// Branding properties for the watch. All deprecated.
type WatchSettings struct {
	BackgroundColor    *string `json:"backgroundColor,omitempty"`
	FeaturedPlaylistID *string `json:"featuredPlaylistId,omitempty"`
	TextColor          *string `json:"textColor,omitempty"`
}
