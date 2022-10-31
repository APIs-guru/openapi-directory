package shared



type TypeOptions struct {
    ImageFetcherOrder []string `json:"ImageFetcherOrder,omitempty"`
    ImageFetchers []string `json:"ImageFetchers,omitempty"`
    ImageOptions []ImageOption `json:"ImageOptions,omitempty"`
    MetadataFetcherOrder []string `json:"MetadataFetcherOrder,omitempty"`
    MetadataFetchers []string `json:"MetadataFetchers,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

