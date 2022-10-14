package shared

type PlaybackInfoDto struct {
	AllowAudioStreamCopy *bool          `json:"AllowAudioStreamCopy,omitempty"`
	AllowVideoStreamCopy *bool          `json:"AllowVideoStreamCopy,omitempty"`
	AudioStreamIndex     *int32         `json:"AudioStreamIndex,omitempty"`
	AutoOpenLiveStream   *bool          `json:"AutoOpenLiveStream,omitempty"`
	DeviceProfile        *DeviceProfile `json:"DeviceProfile,omitempty"`
	EnableDirectPlay     *bool          `json:"EnableDirectPlay,omitempty"`
	EnableDirectStream   *bool          `json:"EnableDirectStream,omitempty"`
	EnableTranscoding    *bool          `json:"EnableTranscoding,omitempty"`
	LiveStreamID         *string        `json:"LiveStreamId,omitempty"`
	MaxAudioChannels     *int32         `json:"MaxAudioChannels,omitempty"`
	MaxStreamingBitrate  *int32         `json:"MaxStreamingBitrate,omitempty"`
	MediaSourceID        *string        `json:"MediaSourceId,omitempty"`
	StartTimeTicks       *int64         `json:"StartTimeTicks,omitempty"`
	SubtitleStreamIndex  *int32         `json:"SubtitleStreamIndex,omitempty"`
	UserID               *string        `json:"UserId,omitempty"`
}
