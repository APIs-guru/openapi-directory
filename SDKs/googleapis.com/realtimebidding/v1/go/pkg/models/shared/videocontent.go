package shared



type VideoContent struct {
    VideoMetadata *VideoMetadata `json:"videoMetadata,omitempty"`
    VideoURL *string `json:"videoUrl,omitempty"`
    VideoVastXML *string `json:"videoVastXml,omitempty"`
    
}

