package shared

type MediaSourceInfo struct {
	AnalyzeDurationMs          *int32                        `json:"AnalyzeDurationMs"`
	Bitrate                    *int32                        `json:"Bitrate"`
	BufferMs                   *int32                        `json:"BufferMs"`
	Container                  *string                       `json:"Container"`
	DefaultAudioStreamIndex    *int32                        `json:"DefaultAudioStreamIndex"`
	DefaultSubtitleStreamIndex *int32                        `json:"DefaultSubtitleStreamIndex"`
	ETag                       *string                       `json:"ETag"`
	EncoderPath                *string                       `json:"EncoderPath"`
	EncoderProtocol            *MediaProtocolEnum            `json:"EncoderProtocol"`
	Formats                    []string                      `json:"Formats"`
	GenPtsInput                *bool                         `json:"GenPtsInput"`
	ID                         *string                       `json:"Id"`
	IgnoreDts                  *bool                         `json:"IgnoreDts"`
	IgnoreIndex                *bool                         `json:"IgnoreIndex"`
	IsInfiniteStream           *bool                         `json:"IsInfiniteStream"`
	IsRemote                   *bool                         `json:"IsRemote"`
	IsoType                    *IsoTypeEnum                  `json:"IsoType"`
	LiveStreamID               *string                       `json:"LiveStreamId"`
	MediaAttachments           []MediaAttachment             `json:"MediaAttachments"`
	MediaStreams               []MediaStream                 `json:"MediaStreams"`
	Name                       *string                       `json:"Name"`
	OpenToken                  *string                       `json:"OpenToken"`
	Path                       *string                       `json:"Path"`
	Protocol                   *MediaProtocolEnum            `json:"Protocol"`
	ReadAtNativeFramerate      *bool                         `json:"ReadAtNativeFramerate"`
	RequiredHTTPHeaders        map[string]string             `json:"RequiredHttpHeaders"`
	RequiresClosing            *bool                         `json:"RequiresClosing"`
	RequiresLooping            *bool                         `json:"RequiresLooping"`
	RequiresOpening            *bool                         `json:"RequiresOpening"`
	RunTimeTicks               *int64                        `json:"RunTimeTicks"`
	Size                       *int64                        `json:"Size"`
	SupportsDirectPlay         *bool                         `json:"SupportsDirectPlay"`
	SupportsDirectStream       *bool                         `json:"SupportsDirectStream"`
	SupportsProbing            *bool                         `json:"SupportsProbing"`
	SupportsTranscoding        *bool                         `json:"SupportsTranscoding"`
	Timestamp                  *TransportStreamTimestampEnum `json:"Timestamp"`
	TranscodingContainer       *string                       `json:"TranscodingContainer"`
	TranscodingSubProtocol     *string                       `json:"TranscodingSubProtocol"`
	TranscodingURL             *string                       `json:"TranscodingUrl"`
	Type                       *MediaSourceTypeEnum          `json:"Type"`
	Video3DFormat              *Video3DFormatEnum            `json:"Video3DFormat"`
	VideoType                  *VideoTypeEnum                `json:"VideoType"`
}
