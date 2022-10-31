package shared




type VideoFileDetailsFileTypeEnum string

const (
    VideoFileDetailsFileTypeEnumVideo VideoFileDetailsFileTypeEnum = "video"
VideoFileDetailsFileTypeEnumAudio VideoFileDetailsFileTypeEnum = "audio"
VideoFileDetailsFileTypeEnumImage VideoFileDetailsFileTypeEnum = "image"
VideoFileDetailsFileTypeEnumArchive VideoFileDetailsFileTypeEnum = "archive"
VideoFileDetailsFileTypeEnumDocument VideoFileDetailsFileTypeEnum = "document"
VideoFileDetailsFileTypeEnumProject VideoFileDetailsFileTypeEnum = "project"
VideoFileDetailsFileTypeEnumOther VideoFileDetailsFileTypeEnum = "other"
)


type VideoFileDetails struct {
    AudioStreams []VideoFileDetailsAudioStream `json:"audioStreams,omitempty"`
    BitrateBps *string `json:"bitrateBps,omitempty"`
    Container *string `json:"container,omitempty"`
    CreationTime *string `json:"creationTime,omitempty"`
    DurationMs *string `json:"durationMs,omitempty"`
    FileName *string `json:"fileName,omitempty"`
    FileSize *string `json:"fileSize,omitempty"`
    FileType *VideoFileDetailsFileTypeEnum `json:"fileType,omitempty"`
    VideoStreams []VideoFileDetailsVideoStream `json:"videoStreams,omitempty"`
    
}

