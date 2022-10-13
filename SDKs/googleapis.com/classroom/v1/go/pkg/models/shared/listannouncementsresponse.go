package shared

type ListAnnouncementsResponse struct {
	Announcements []Announcement `json:"announcements"`
	NextPageToken *string        `json:"nextPageToken"`
}
