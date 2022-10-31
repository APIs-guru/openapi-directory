package shared

type Database struct {
	Charset                  *string                   `json:"charset,omitempty"`
	Collation                *string                   `json:"collation,omitempty"`
	Etag                     *string                   `json:"etag,omitempty"`
	Instance                 *string                   `json:"instance,omitempty"`
	Kind                     *string                   `json:"kind,omitempty"`
	Name                     *string                   `json:"name,omitempty"`
	Project                  *string                   `json:"project,omitempty"`
	SelfLink                 *string                   `json:"selfLink,omitempty"`
	SqlserverDatabaseDetails *SQLServerDatabaseDetails `json:"sqlserverDatabaseDetails,omitempty"`
}
