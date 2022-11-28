package shared

// IdentitytoolkitRelyingpartyDownloadAccountRequest
// Request to download user account in batch.
type IdentitytoolkitRelyingpartyDownloadAccountRequest struct {
	DelegatedProjectNumber *string `json:"delegatedProjectNumber,omitempty"`
	MaxResults             *int64  `json:"maxResults,omitempty"`
	NextPageToken          *string `json:"nextPageToken,omitempty"`
	TargetProjectID        *string `json:"targetProjectId,omitempty"`
}
