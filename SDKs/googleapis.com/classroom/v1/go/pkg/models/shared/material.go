package shared

// Material
// Material attached to course work. When creating attachments, setting the `form` field is not supported.
type Material struct {
	DriveFile    *SharedDriveFile `json:"driveFile,omitempty"`
	Form         *Form            `json:"form,omitempty"`
	Link         *Link            `json:"link,omitempty"`
	YoutubeVideo *YouTubeVideo    `json:"youtubeVideo,omitempty"`
}
