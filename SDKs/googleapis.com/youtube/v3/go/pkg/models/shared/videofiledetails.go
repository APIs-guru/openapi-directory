package shared

type VideoFileDetailsFileTypeEnum string

const (
	VideoFileDetailsFileTypeEnumVideo    VideoFileDetailsFileTypeEnum = "video"
	VideoFileDetailsFileTypeEnumAudio    VideoFileDetailsFileTypeEnum = "audio"
	VideoFileDetailsFileTypeEnumImage    VideoFileDetailsFileTypeEnum = "image"
	VideoFileDetailsFileTypeEnumArchive  VideoFileDetailsFileTypeEnum = "archive"
	VideoFileDetailsFileTypeEnumDocument VideoFileDetailsFileTypeEnum = "document"
	VideoFileDetailsFileTypeEnumProject  VideoFileDetailsFileTypeEnum = "project"
	VideoFileDetailsFileTypeEnumOther    VideoFileDetailsFileTypeEnum = "other"
)

type VideoFileDetails struct {
	AudioStreams []VideoFileDetailsAudioStream `json:"audioStreams"`
	BitrateBps   *string                       `json:"bitrateBps"`
	Container    *string                       `json:"container"`
	CreationTime *string                       `json:"creationTime"`
	DurationMs   *string                       `json:"durationMs"`
	FileName     *string                       `json:"fileName"`
	FileSize     *string                       `json:"fileSize"`
	FileType     *VideoFileDetailsFileTypeEnum `json:"fileType"`
	VideoStreams []VideoFileDetailsVideoStream `json:"videoStreams"`
}
