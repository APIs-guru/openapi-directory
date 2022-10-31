package shared



type CreateFootnoteRequest struct {
    EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation,omitempty"`
    Location *Location `json:"location,omitempty"`
    
}

