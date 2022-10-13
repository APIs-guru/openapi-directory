package shared

type ACL struct {
	Etag          *string   `json:"etag"`
	Items         []ACLRule `json:"items"`
	Kind          *string   `json:"kind"`
	NextPageToken *string   `json:"nextPageToken"`
	NextSyncToken *string   `json:"nextSyncToken"`
}
