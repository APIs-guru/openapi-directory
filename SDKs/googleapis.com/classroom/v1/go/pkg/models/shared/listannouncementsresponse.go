package shared

type ListAnnouncementsResponse struct {
	Announcements []Announcement `json:"announcements,omitempty"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
