package shared

// RemoveBitbucketServerConnectedRepositoryRequestInput
// RPC request object accepted by RemoveBitbucketServerConnectedRepository RPC method.
type RemoveBitbucketServerConnectedRepositoryRequestInput struct {
	ConnectedRepository *BitbucketServerRepositoryIDInput `json:"connectedRepository,omitempty"`
}
