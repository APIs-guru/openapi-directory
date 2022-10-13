package shared

type UpdateContactPhotoRequestSourcesEnum string

const (
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeUnspecified   UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_UNSPECIFIED"
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeProfile       UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_PROFILE"
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeContact       UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_CONTACT"
	UpdateContactPhotoRequestSourcesEnumReadSourceTypeDomainContact UpdateContactPhotoRequestSourcesEnum = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
)

type UpdateContactPhotoRequest struct {
	PersonFields *string                                `json:"personFields"`
	PhotoBytes   *string                                `json:"photoBytes"`
	Sources      []UpdateContactPhotoRequestSourcesEnum `json:"sources"`
}
