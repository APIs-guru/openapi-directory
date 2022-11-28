package shared

// OpenLiveStreamDto
// Open live stream dto.
type OpenLiveStreamDto struct {
	AudioStreamIndex    *int32              `json:"AudioStreamIndex,omitempty"`
	DeviceProfile       *DeviceProfile      `json:"DeviceProfile,omitempty"`
	DirectPlayProtocols []MediaProtocolEnum `json:"DirectPlayProtocols,omitempty"`
	EnableDirectPlay    *bool               `json:"EnableDirectPlay,omitempty"`
	EnableDirectStream  *bool               `json:"EnableDirectStream,omitempty"`
	ItemID              *string             `json:"ItemId,omitempty"`
	MaxAudioChannels    *int32              `json:"MaxAudioChannels,omitempty"`
	MaxStreamingBitrate *int32              `json:"MaxStreamingBitrate,omitempty"`
	OpenToken           *string             `json:"OpenToken,omitempty"`
	PlaySessionID       *string             `json:"PlaySessionId,omitempty"`
	StartTimeTicks      *int64              `json:"StartTimeTicks,omitempty"`
	SubtitleStreamIndex *int32              `json:"SubtitleStreamIndex,omitempty"`
	UserID              *string             `json:"UserId,omitempty"`
}
