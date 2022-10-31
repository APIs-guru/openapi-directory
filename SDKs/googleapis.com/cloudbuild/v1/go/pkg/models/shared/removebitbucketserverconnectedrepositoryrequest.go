package shared

type RemoveBitbucketServerConnectedRepositoryRequest struct {
	ConnectedRepository *BitbucketServerRepositoryID `json:"connectedRepository,omitempty"`
}
