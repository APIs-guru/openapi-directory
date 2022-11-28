package shared

type SubjectKindEnum string

const (
	SubjectKindEnumAuthTypeUnspecified SubjectKindEnum = "AUTH_TYPE_UNSPECIFIED"
	SubjectKindEnumUser                SubjectKindEnum = "USER"
	SubjectKindEnumServiceaccount      SubjectKindEnum = "SERVICEACCOUNT"
	SubjectKindEnumGroup               SubjectKindEnum = "GROUP"
)

// Subject
// Represents a Kubernetes Subject.
type Subject struct {
	Kind *SubjectKindEnum `json:"kind,omitempty"`
	Name *string          `json:"name,omitempty"`
	Ns   *string          `json:"ns,omitempty"`
}
