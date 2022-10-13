package shared

type OpenLiveStreamDto struct {
	AudioStreamIndex    *int32              `json:"AudioStreamIndex"`
	DeviceProfile       *DeviceProfile      `json:"DeviceProfile"`
	DirectPlayProtocols []MediaProtocolEnum `json:"DirectPlayProtocols"`
	EnableDirectPlay    *bool               `json:"EnableDirectPlay"`
	EnableDirectStream  *bool               `json:"EnableDirectStream"`
	ItemID              *string             `json:"ItemId"`
	MaxAudioChannels    *int32              `json:"MaxAudioChannels"`
	MaxStreamingBitrate *int32              `json:"MaxStreamingBitrate"`
	OpenToken           *string             `json:"OpenToken"`
	PlaySessionID       *string             `json:"PlaySessionId"`
	StartTimeTicks      *int64              `json:"StartTimeTicks"`
	SubtitleStreamIndex *int32              `json:"SubtitleStreamIndex"`
	UserID              *string             `json:"UserId"`
}
