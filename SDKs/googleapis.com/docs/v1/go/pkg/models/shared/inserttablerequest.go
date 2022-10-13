package shared

type InsertTableRequest struct {
	Columns              *int32                `json:"columns"`
	EndOfSegmentLocation *EndOfSegmentLocation `json:"endOfSegmentLocation"`
	Location             *Location             `json:"location"`
	Rows                 *int32                `json:"rows"`
}
