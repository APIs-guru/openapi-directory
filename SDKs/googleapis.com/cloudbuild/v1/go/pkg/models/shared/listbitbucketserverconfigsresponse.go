package shared

// ListBitbucketServerConfigsResponse
// RPC response object returned by ListBitbucketServerConfigs RPC method.
type ListBitbucketServerConfigsResponse struct {
	BitbucketServerConfigs []BitbucketServerConfig `json:"bitbucketServerConfigs,omitempty"`
	NextPageToken          *string                 `json:"nextPageToken,omitempty"`
}
