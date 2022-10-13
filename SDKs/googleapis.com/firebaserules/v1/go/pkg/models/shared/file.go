package shared

type File struct {
	Content     *string `json:"content"`
	Fingerprint *string `json:"fingerprint"`
	Name        *string `json:"name"`
}
