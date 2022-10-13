package shared

type PersonMetadataObjectTypeEnum string

const (
	PersonMetadataObjectTypeEnumObjectTypeUnspecified PersonMetadataObjectTypeEnum = "OBJECT_TYPE_UNSPECIFIED"
	PersonMetadataObjectTypeEnumPerson                PersonMetadataObjectTypeEnum = "PERSON"
	PersonMetadataObjectTypeEnumPage                  PersonMetadataObjectTypeEnum = "PAGE"
)

type PersonMetadata struct {
	Deleted                   *bool                         `json:"deleted"`
	LinkedPeopleResourceNames []string                      `json:"linkedPeopleResourceNames"`
	ObjectType                *PersonMetadataObjectTypeEnum `json:"objectType"`
	PreviousResourceNames     []string                      `json:"previousResourceNames"`
	Sources                   []Source                      `json:"sources"`
}
