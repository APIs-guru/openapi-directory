package shared

type VersionKindEnum string

const (
	VersionKindEnumVersionKindUnspecified VersionKindEnum = "VERSION_KIND_UNSPECIFIED"
	VersionKindEnumNormal                 VersionKindEnum = "NORMAL"
	VersionKindEnumMinimum                VersionKindEnum = "MINIMUM"
	VersionKindEnumMaximum                VersionKindEnum = "MAXIMUM"
)

// Version
// Version contains structured information about the version of a package.
type Version struct {
	Epoch     *int32           `json:"epoch,omitempty"`
	Inclusive *bool            `json:"inclusive,omitempty"`
	Kind      *VersionKindEnum `json:"kind,omitempty"`
	Name      *string          `json:"name,omitempty"`
	Revision  *string          `json:"revision,omitempty"`
}
