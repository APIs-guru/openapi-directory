package shared

type DriveFile struct {
	AlternateLink *string `json:"alternateLink"`
	ID            *string `json:"id"`
	ThumbnailURL  *string `json:"thumbnailUrl"`
	Title         *string `json:"title"`
}
