package operations

type GetHlsVideoSegmentLegacyPathParams struct {
	ItemID           string `pathParam:"style=simple,explode=false,name=itemId"`
	PlaylistID       string `pathParam:"style=simple,explode=false,name=playlistId"`
	SegmentContainer string `pathParam:"style=simple,explode=false,name=segmentContainer"`
	SegmentID        string `pathParam:"style=simple,explode=false,name=segmentId"`
}

type GetHlsVideoSegmentLegacyRequest struct {
	PathParams GetHlsVideoSegmentLegacyPathParams
}

type GetHlsVideoSegmentLegacyResponse struct {
	ContentType                                          string
	GetHlsVideoSegmentLegacy200VideoWildcardBinaryString []byte
	ProblemDetails                                       map[string]interface{}
	StatusCode                                           int64
}
