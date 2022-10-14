package shared

type CourseMaterial struct {
	DriveFile    *DriveFile    `json:"driveFile,omitempty"`
	Form         *Form         `json:"form,omitempty"`
	Link         *Link         `json:"link,omitempty"`
	YouTubeVideo *YouTubeVideo `json:"youTubeVideo,omitempty"`
}
