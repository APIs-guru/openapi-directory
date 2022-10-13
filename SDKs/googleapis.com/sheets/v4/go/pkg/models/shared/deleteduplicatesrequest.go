package shared

type DeleteDuplicatesRequest struct {
	ComparisonColumns []DimensionRange `json:"comparisonColumns"`
	Range             *GridRange       `json:"range"`
}
