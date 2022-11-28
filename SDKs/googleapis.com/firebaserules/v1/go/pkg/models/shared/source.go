package shared

// Source
// `Source` is one or more `File` messages comprising a logical set of rules.
type Source struct {
	Files []File `json:"files,omitempty"`
}
