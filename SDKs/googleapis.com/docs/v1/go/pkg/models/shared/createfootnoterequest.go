package shared

type CreateFootnoteRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation"`
	Location             *Location             `json:"location"`
}
