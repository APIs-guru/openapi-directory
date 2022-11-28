package shared

type ErrorDetail struct {
	Code        *string
	Context     map[string][]string
	In          *string
	Message     string
	SubCategory *string
}
