package shared

type TypeOptions struct {
	ImageFetcherOrder    []string      `json:"ImageFetcherOrder"`
	ImageFetchers        []string      `json:"ImageFetchers"`
	ImageOptions         []ImageOption `json:"ImageOptions"`
	MetadataFetcherOrder []string      `json:"MetadataFetcherOrder"`
	MetadataFetchers     []string      `json:"MetadataFetchers"`
	Type                 *string       `json:"Type"`
}
