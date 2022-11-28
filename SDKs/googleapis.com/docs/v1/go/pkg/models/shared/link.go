package shared

// Link
// A reference to another portion of a document or an external URL resource.
type Link struct {
	BookmarkID *string `json:"bookmarkId,omitempty"`
	HeadingID  *string `json:"headingId,omitempty"`
	URL        *string `json:"url,omitempty"`
}
