package shared

type LibraryOptionsResultDto struct {
	MetadataReaders  []LibraryOptionInfoDto  `json:"MetadataReaders"`
	MetadataSavers   []LibraryOptionInfoDto  `json:"MetadataSavers"`
	SubtitleFetchers []LibraryOptionInfoDto  `json:"SubtitleFetchers"`
	TypeOptions      []LibraryTypeOptionsDto `json:"TypeOptions"`
}
