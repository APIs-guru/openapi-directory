package shared

type Material struct {
	DriveFile    *SharedDriveFile `json:"driveFile"`
	Form         *Form            `json:"form"`
	Link         *Link            `json:"link"`
	YoutubeVideo *YouTubeVideo    `json:"youtubeVideo"`
}
