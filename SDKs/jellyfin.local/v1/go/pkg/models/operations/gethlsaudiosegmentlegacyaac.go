package operations

type GetHlsAudioSegmentLegacyAacPathParams struct {
	ItemID    string `pathParam:"style=simple,explode=false,name=itemId"`
	SegmentID string `pathParam:"style=simple,explode=false,name=segmentId"`
}

type GetHlsAudioSegmentLegacyAacRequest struct {
	PathParams GetHlsAudioSegmentLegacyAacPathParams
}

type GetHlsAudioSegmentLegacyAacResponse struct {
	ContentType                                             string
	GetHlsAudioSegmentLegacyAac200AudioWildcardBinaryString []byte
	StatusCode                                              int64
}
