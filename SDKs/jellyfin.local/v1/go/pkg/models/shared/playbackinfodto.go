package shared

type PlaybackInfoDto struct {
	AllowAudioStreamCopy *bool          `json:"AllowAudioStreamCopy"`
	AllowVideoStreamCopy *bool          `json:"AllowVideoStreamCopy"`
	AudioStreamIndex     *int32         `json:"AudioStreamIndex"`
	AutoOpenLiveStream   *bool          `json:"AutoOpenLiveStream"`
	DeviceProfile        *DeviceProfile `json:"DeviceProfile"`
	EnableDirectPlay     *bool          `json:"EnableDirectPlay"`
	EnableDirectStream   *bool          `json:"EnableDirectStream"`
	EnableTranscoding    *bool          `json:"EnableTranscoding"`
	LiveStreamID         *string        `json:"LiveStreamId"`
	MaxAudioChannels     *int32         `json:"MaxAudioChannels"`
	MaxStreamingBitrate  *int32         `json:"MaxStreamingBitrate"`
	MediaSourceID        *string        `json:"MediaSourceId"`
	StartTimeTicks       *int64         `json:"StartTimeTicks"`
	SubtitleStreamIndex  *int32         `json:"SubtitleStreamIndex"`
	UserID               *string        `json:"UserId"`
}
