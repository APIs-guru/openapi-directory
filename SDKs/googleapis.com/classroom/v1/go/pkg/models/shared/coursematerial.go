package shared

type CourseMaterial struct {
	DriveFile    *DriveFile    `json:"driveFile"`
	Form         *Form         `json:"form"`
	Link         *Link         `json:"link"`
	YouTubeVideo *YouTubeVideo `json:"youTubeVideo"`
}
