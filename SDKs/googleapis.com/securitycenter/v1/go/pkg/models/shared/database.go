package shared

// Database
// Represents database access information, such as queries. A database may be a sub-resource of an instance (as in the case of CloudSQL instances or Cloud Spanner instances), or the database instance itself. Some database resources may not have the full resource name populated because these resource types are not yet supported by Cloud Asset Inventory (e.g. CloudSQL databases). In these cases only the display name will be provided.
type Database struct {
	DisplayName *string  `json:"displayName,omitempty"`
	Grantees    []string `json:"grantees,omitempty"`
	Name        *string  `json:"name,omitempty"`
	Query       *string  `json:"query,omitempty"`
	UserName    *string  `json:"userName,omitempty"`
}
