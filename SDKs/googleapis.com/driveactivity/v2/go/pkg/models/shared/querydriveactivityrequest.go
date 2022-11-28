package shared

// QueryDriveActivityRequest
// The request message for querying Drive activity.
type QueryDriveActivityRequest struct {
	AncestorName          *string                `json:"ancestorName,omitempty"`
	ConsolidationStrategy *ConsolidationStrategy `json:"consolidationStrategy,omitempty"`
	Filter                *string                `json:"filter,omitempty"`
	ItemName              *string                `json:"itemName,omitempty"`
	PageSize              *int32                 `json:"pageSize,omitempty"`
	PageToken             *string                `json:"pageToken,omitempty"`
}
