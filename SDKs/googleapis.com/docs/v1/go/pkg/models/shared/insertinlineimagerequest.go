package shared

type InsertInlineImageRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation"`
	Location             *Location             `json:"location"`
	ObjectSize           *Size                 `json:"objectSize"`
	URI                  *string               `json:"uri"`
}
