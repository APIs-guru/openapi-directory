package shared

type VideoContent struct {
	VideoMetadata *VideoMetadata `json:"videoMetadata"`
	VideoURL      *string        `json:"videoUrl"`
	VideoVastXML  *string        `json:"videoVastXml"`
}
