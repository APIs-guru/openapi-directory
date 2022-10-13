package shared

type MetadataOptions struct {
	DisabledImageFetchers    []string `json:"DisabledImageFetchers"`
	DisabledMetadataFetchers []string `json:"DisabledMetadataFetchers"`
	DisabledMetadataSavers   []string `json:"DisabledMetadataSavers"`
	ImageFetcherOrder        []string `json:"ImageFetcherOrder"`
	ItemType                 *string  `json:"ItemType"`
	LocalMetadataReaderOrder []string `json:"LocalMetadataReaderOrder"`
	MetadataFetcherOrder     []string `json:"MetadataFetcherOrder"`
}
