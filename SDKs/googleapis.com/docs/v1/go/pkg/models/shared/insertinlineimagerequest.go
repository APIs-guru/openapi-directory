package shared

type InsertInlineImageRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
	Location             *Location             `json:"location,omitempty"`
	ObjectSize           *Size                 `json:"objectSize,omitempty"`
	URI                  *string               `json:"uri,omitempty"`
}
