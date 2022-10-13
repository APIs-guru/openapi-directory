package shared

type InsertPageBreakRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation"`
	Location             *Location             `json:"location"`
}
