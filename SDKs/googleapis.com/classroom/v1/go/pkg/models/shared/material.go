package shared

type Material struct {
	DriveFile    *SharedDriveFile `json:"driveFile,omitempty"`
	Form         *Form            `json:"form,omitempty"`
	Link         *Link            `json:"link,omitempty"`
	YoutubeVideo *YouTubeVideo    `json:"youtubeVideo,omitempty"`
}
