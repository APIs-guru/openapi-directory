package shared

type UvarFilterMatchEnum string

const (
	UvarFilterMatchEnumUnspecified UvarFilterMatchEnum = "UNSPECIFIED"
	UvarFilterMatchEnumExact       UvarFilterMatchEnum = "EXACT"
	UvarFilterMatchEnumContains    UvarFilterMatchEnum = "CONTAINS"
)

// UvarFilter
// Defines the filtering on a single uvar.
type UvarFilter struct {
	Complement *bool                `json:"complement,omitempty"`
	Index      *string              `json:"index,omitempty"`
	Kind       *string              `json:"kind,omitempty"`
	Match      *UvarFilterMatchEnum `json:"match,omitempty"`
	Values     []string             `json:"values,omitempty"`
}
