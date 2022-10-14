package shared

type ListBitbucketServerConfigsResponse struct {
	BitbucketServerConfigs []BitbucketServerConfig `json:"bitbucketServerConfigs,omitempty"`
	NextPageToken          *string                 `json:"nextPageToken,omitempty"`
}
