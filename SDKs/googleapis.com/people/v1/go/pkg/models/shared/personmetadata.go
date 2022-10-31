package shared

type PersonMetadataObjectTypeEnum string

const (
	PersonMetadataObjectTypeEnumObjectTypeUnspecified PersonMetadataObjectTypeEnum = "OBJECT_TYPE_UNSPECIFIED"
	PersonMetadataObjectTypeEnumPerson                PersonMetadataObjectTypeEnum = "PERSON"
	PersonMetadataObjectTypeEnumPage                  PersonMetadataObjectTypeEnum = "PAGE"
)

type PersonMetadata struct {
	Deleted                   *bool                         `json:"deleted,omitempty"`
	LinkedPeopleResourceNames []string                      `json:"linkedPeopleResourceNames,omitempty"`
	ObjectType                *PersonMetadataObjectTypeEnum `json:"objectType,omitempty"`
	PreviousResourceNames     []string                      `json:"previousResourceNames,omitempty"`
	Sources                   []Source                      `json:"sources,omitempty"`
}
