package shared

type UvarFilterMatchEnum string

const (
	UvarFilterMatchEnumUnspecified UvarFilterMatchEnum = "UNSPECIFIED"
	UvarFilterMatchEnumExact       UvarFilterMatchEnum = "EXACT"
	UvarFilterMatchEnumContains    UvarFilterMatchEnum = "CONTAINS"
)

type UvarFilter struct {
	Complement *bool                `json:"complement"`
	Index      *string              `json:"index"`
	Kind       *string              `json:"kind"`
	Match      *UvarFilterMatchEnum `json:"match"`
	Values     []string             `json:"values"`
}
