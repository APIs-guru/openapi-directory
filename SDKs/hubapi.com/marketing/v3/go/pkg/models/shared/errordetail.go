package shared

type ErrorDetail struct {
	Code        *string             `json:"code"`
	Context     map[string][]string `json:"context"`
	In          *string             `json:"in"`
	Message     string              `json:"message"`
	SubCategory *string             `json:"subCategory"`
}
