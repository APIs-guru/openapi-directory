package shared

type PersonMetadataObjectTypeEnum string

const (
	PersonMetadataObjectTypeEnumObjectTypeUnspecified PersonMetadataObjectTypeEnum = "OBJECT_TYPE_UNSPECIFIED"
	PersonMetadataObjectTypeEnumPerson                PersonMetadataObjectTypeEnum = "PERSON"
	PersonMetadataObjectTypeEnumPage                  PersonMetadataObjectTypeEnum = "PAGE"
)

// PersonMetadata
// The metadata about a person.
type PersonMetadata struct {
	Deleted                   *bool                         `json:"deleted,omitempty"`
	LinkedPeopleResourceNames []string                      `json:"linkedPeopleResourceNames,omitempty"`
	ObjectType                *PersonMetadataObjectTypeEnum `json:"objectType,omitempty"`
	PreviousResourceNames     []string                      `json:"previousResourceNames,omitempty"`
	Sources                   []Source                      `json:"sources,omitempty"`
}

// PersonMetadataInput
// The metadata about a person.
type PersonMetadataInput struct {
	Sources []SourceInput `json:"sources,omitempty"`
}
