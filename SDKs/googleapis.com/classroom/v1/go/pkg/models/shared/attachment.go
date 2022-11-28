package shared

// Attachment
// Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
type Attachment struct {
	DriveFile    *DriveFile    `json:"driveFile,omitempty"`
	Form         *Form         `json:"form,omitempty"`
	Link         *Link         `json:"link,omitempty"`
	YouTubeVideo *YouTubeVideo `json:"youTubeVideo,omitempty"`
}
