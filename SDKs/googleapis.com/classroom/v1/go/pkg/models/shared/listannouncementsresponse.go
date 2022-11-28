package shared

// ListAnnouncementsResponse
// Response when listing course work.
type ListAnnouncementsResponse struct {
	Announcements []Announcement `json:"announcements,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
