package shared

type ListBitbucketServerConfigsResponse struct {
	BitbucketServerConfigs []BitbucketServerConfig `json:"bitbucketServerConfigs"`
	NextPageToken          *string                 `json:"nextPageToken"`
}
