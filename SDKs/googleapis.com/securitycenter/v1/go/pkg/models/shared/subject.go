package shared

type SubjectKindEnum string

const (
	SubjectKindEnumAuthTypeUnspecified SubjectKindEnum = "AUTH_TYPE_UNSPECIFIED"
	SubjectKindEnumUser                SubjectKindEnum = "USER"
	SubjectKindEnumServiceaccount      SubjectKindEnum = "SERVICEACCOUNT"
	SubjectKindEnumGroup               SubjectKindEnum = "GROUP"
)

type Subject struct {
	Kind *SubjectKindEnum `json:"kind"`
	Name *string          `json:"name"`
	Ns   *string          `json:"ns"`
}
