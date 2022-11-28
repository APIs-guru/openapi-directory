package shared

// CourseMaterial
// A material attached to a course as part of a material set.
type CourseMaterial struct {
	DriveFile    *DriveFile    `json:"driveFile,omitempty"`
	Form         *Form         `json:"form,omitempty"`
	Link         *Link         `json:"link,omitempty"`
	YouTubeVideo *YouTubeVideo `json:"youTubeVideo,omitempty"`
}
