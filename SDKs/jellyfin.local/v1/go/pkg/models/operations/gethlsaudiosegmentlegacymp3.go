package operations

type GetHlsAudioSegmentLegacyMp3PathParams struct {
	ItemID    string `pathParam:"style=simple,explode=false,name=itemId"`
	SegmentID string `pathParam:"style=simple,explode=false,name=segmentId"`
}

type GetHlsAudioSegmentLegacyMp3Request struct {
	PathParams GetHlsAudioSegmentLegacyMp3PathParams
}

type GetHlsAudioSegmentLegacyMp3Response struct {
	ContentType                                             string
	GetHlsAudioSegmentLegacyMp3200AudioWildcardBinaryString []byte
	StatusCode                                              int64
}
