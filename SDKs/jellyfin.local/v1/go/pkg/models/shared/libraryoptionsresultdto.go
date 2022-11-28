package shared

// LibraryOptionsResultDto
// Library options result dto.
type LibraryOptionsResultDto struct {
	MetadataReaders  []LibraryOptionInfoDto  `json:"MetadataReaders,omitempty"`
	MetadataSavers   []LibraryOptionInfoDto  `json:"MetadataSavers,omitempty"`
	SubtitleFetchers []LibraryOptionInfoDto  `json:"SubtitleFetchers,omitempty"`
	TypeOptions      []LibraryTypeOptionsDto `json:"TypeOptions,omitempty"`
}
