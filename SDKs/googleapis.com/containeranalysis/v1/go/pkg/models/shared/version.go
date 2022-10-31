package shared

type VersionKindEnum string

const (
	VersionKindEnumVersionKindUnspecified VersionKindEnum = "VERSION_KIND_UNSPECIFIED"
	VersionKindEnumNormal                 VersionKindEnum = "NORMAL"
	VersionKindEnumMinimum                VersionKindEnum = "MINIMUM"
	VersionKindEnumMaximum                VersionKindEnum = "MAXIMUM"
)

type Version struct {
	Epoch     *int32           `json:"epoch,omitempty"`
	FullName  *string          `json:"fullName,omitempty"`
	Inclusive *bool            `json:"inclusive,omitempty"`
	Kind      *VersionKindEnum `json:"kind,omitempty"`
	Name      *string          `json:"name,omitempty"`
	Revision  *string          `json:"revision,omitempty"`
}
