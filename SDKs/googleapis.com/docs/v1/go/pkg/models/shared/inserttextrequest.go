package shared

type InsertTextRequest struct {
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation"`
	Location             *Location             `json:"location"`
	Text                 *string               `json:"text"`
}
