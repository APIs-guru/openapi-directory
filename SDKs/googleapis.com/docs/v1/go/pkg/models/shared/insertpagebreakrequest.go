package shared



type InsertPageBreakRequest struct {
    EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
    Location *Location `json:"location,omitempty"`
    
}

