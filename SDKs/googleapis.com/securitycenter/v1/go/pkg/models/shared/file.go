package shared

type File struct {
	Contents        *string `json:"contents"`
	HashedSize      *string `json:"hashedSize"`
	PartiallyHashed *bool   `json:"partiallyHashed"`
	Path            *string `json:"path"`
	Sha256          *string `json:"sha256"`
	Size            *string `json:"size"`
}
