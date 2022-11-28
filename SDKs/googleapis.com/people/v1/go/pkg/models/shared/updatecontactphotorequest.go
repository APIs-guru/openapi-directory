package shared

type UpdateContactPhotoRequestSourcesEnum string

const (
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeUnspecified   UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeProfile       UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeContact       UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeDomainContact UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

// UpdateContactPhotoRequest
// A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
type UpdateContactPhotoRequest struct {
	PersonFields *string                                `json:"personFields,omitempty"`
	PhotoBytes   *string                                `json:"photoBytes,omitempty"`
	Sources      []UpdateContactPhotoRequestSourcesEnum `json:"sources,omitempty"`
}
