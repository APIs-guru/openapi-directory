package shared

type Link struct {
	BookmarkID *string `json:"bookmarkId,omitempty"`
	HeadingID  *string `json:"headingId,omitempty"`
	URL        *string `json:"url,omitempty"`
}
