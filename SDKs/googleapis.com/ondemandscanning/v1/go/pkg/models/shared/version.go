package shared

type VersionKindEnum string

const (
	VersionKindEnumVersionKindUnspecified VersionKindEnum = "VERSION_KIND_UNSPECIFIED"
	VersionKindEnumNormal                 VersionKindEnum = "NORMAL"
	VersionKindEnumMinimum                VersionKindEnum = "MINIMUM"
	VersionKindEnumMaximum                VersionKindEnum = "MAXIMUM"
)

type Version struct {
	Epoch     *int32           `json:"epoch"`
	FullName  *string          `json:"fullName"`
	Inclusive *bool            `json:"inclusive"`
	Kind      *VersionKindEnum `json:"kind"`
	Name      *string          `json:"name"`
	Revision  *string          `json:"revision"`
}
