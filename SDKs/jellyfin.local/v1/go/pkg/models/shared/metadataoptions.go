package shared

// MetadataOptions
// Class MetadataOptions.
type MetadataOptions struct {
	DisabledImageFetchers    []string `json:"DisabledImageFetchers,omitempty"`
	DisabledMetadataFetchers []string `json:"DisabledMetadataFetchers,omitempty"`
	DisabledMetadataSavers   []string `json:"DisabledMetadataSavers,omitempty"`
	ImageFetcherOrder        []string `json:"ImageFetcherOrder,omitempty"`
	ItemType                 *string  `json:"ItemType,omitempty"`
	LocalMetadataReaderOrder []string `json:"LocalMetadataReaderOrder,omitempty"`
	MetadataFetcherOrder     []string `json:"MetadataFetcherOrder,omitempty"`
}
