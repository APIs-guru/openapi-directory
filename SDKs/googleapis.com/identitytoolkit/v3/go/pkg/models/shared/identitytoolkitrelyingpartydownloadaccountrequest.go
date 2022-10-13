package shared

type IdentitytoolkitRelyingpartyDownloadAccountRequest struct {
	DelegatedProjectNumber *string `json:"delegatedProjectNumber"`
	MaxResults             *int64  `json:"maxResults"`
	NextPageToken          *string `json:"nextPageToken"`
	TargetProjectID        *string `json:"targetProjectId"`
}
