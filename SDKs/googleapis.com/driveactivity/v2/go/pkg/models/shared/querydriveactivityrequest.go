package shared

type QueryDriveActivityRequest struct {
	AncestorName          *string                `json:"ancestorName"`
	ConsolidationStrategy *ConsolidationStrategy `json:"consolidationStrategy"`
	Filter                *string                `json:"filter"`
	ItemName              *string                `json:"itemName"`
	PageSize              *int32                 `json:"pageSize"`
	PageToken             *string                `json:"pageToken"`
}
