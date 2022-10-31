package shared



type Attachment struct {
    DriveFile *DriveFile `json:"driveFile,omitempty"`
    Form *Form `json:"form,omitempty"`
    Link *Link `json:"link,omitempty"`
    YouTubeVideo *YouTubeVideo `json:"youTubeVideo,omitempty"`
    
}

