package shared

type LibraryTypeOptionsDto struct {
	DefaultImageOptions []ImageOption          `json:"DefaultImageOptions"`
	ImageFetchers       []LibraryOptionInfoDto `json:"ImageFetchers"`
	MetadataFetchers    []LibraryOptionInfoDto `json:"MetadataFetchers"`
	SupportedImageTypes []ImageTypeEnum        `json:"SupportedImageTypes"`
	Type                *string                `json:"Type"`
}
