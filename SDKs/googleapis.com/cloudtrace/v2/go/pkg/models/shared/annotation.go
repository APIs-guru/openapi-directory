package shared

type Annotation struct {
	Attributes  *Attributes        `json:"attributes"`
	Description *TruncatableString `json:"description"`
}
