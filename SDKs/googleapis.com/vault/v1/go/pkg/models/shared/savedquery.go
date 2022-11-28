package shared

// SavedQuery
// The definition of a saved query. To work with Vault resources, the account must have the [required Vault privileges](https://support.google.com/vault/answer/2799699) and access to the matter. To access a matter, the account must have created the matter, have the matter shared with them, or have the **View All Matters** privilege.
type SavedQuery struct {
	CreateTime   *string `json:"createTime,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	MatterID     *string `json:"matterId,omitempty"`
	Query        *Query  `json:"query,omitempty"`
	SavedQueryID *string `json:"savedQueryId,omitempty"`
}
