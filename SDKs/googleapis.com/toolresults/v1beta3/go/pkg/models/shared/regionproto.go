package shared

// RegionProto
// A rectangular region.
type RegionProto struct {
	HeightPx *int32 `json:"heightPx,omitempty"`
	LeftPx   *int32 `json:"leftPx,omitempty"`
	TopPx    *int32 `json:"topPx,omitempty"`
	WidthPx  *int32 `json:"widthPx,omitempty"`
}
