package shared

// InsertInlineImageRequest
// Inserts an InlineObject containing an image at the given location.
type InsertInlineImageRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
	Location             *Location             `json:"location,omitempty"`
	ObjectSize           *Size                 `json:"objectSize,omitempty"`
	URI                  *string               `json:"uri,omitempty"`
}
