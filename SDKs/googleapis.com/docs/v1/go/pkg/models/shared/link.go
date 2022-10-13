package shared

type Link struct {
	BookmarkID *string `json:"bookmarkId"`
	HeadingID  *string `json:"headingId"`
	URL        *string `json:"url"`
}
