package shared

type ValidatePathDto struct {
	IsFile           *bool   `json:"IsFile"`
	Path             *string `json:"Path"`
	ValidateWritable *bool   `json:"ValidateWritable"`
}
