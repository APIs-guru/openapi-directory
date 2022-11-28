package shared

// ProductSetInput
// A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
type ProductSetInput struct {
	DisplayName *string `json:"displayName,omitempty"`
	IndexError  *Status `json:"indexError,omitempty"`
	Name        *string `json:"name,omitempty"`
}

// ProductSet
// A ProductSet contains Products. A ProductSet can contain a maximum of 1 million reference images. If the limit is exceeded, periodic indexing will fail.
type ProductSet struct {
	DisplayName *string `json:"displayName,omitempty"`
	IndexError  *Status `json:"indexError,omitempty"`
	IndexTime   *string `json:"indexTime,omitempty"`
	Name        *string `json:"name,omitempty"`
}
