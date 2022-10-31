package shared

type LibraryTypeOptionsDto struct {
	DefaultImageOptions []ImageOption          `json:"DefaultImageOptions,omitempty"`
	ImageFetchers       []LibraryOptionInfoDto `json:"ImageFetchers,omitempty"`
	MetadataFetchers    []LibraryOptionInfoDto `json:"MetadataFetchers,omitempty"`
	SupportedImageTypes []ImageTypeEnum        `json:"SupportedImageTypes,omitempty"`
	Type                *string                `json:"Type,omitempty"`
}
