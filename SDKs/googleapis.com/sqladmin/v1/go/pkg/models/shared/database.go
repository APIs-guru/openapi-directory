package shared

type Database struct {
	Charset                  *string                   `json:"charset"`
	Collation                *string                   `json:"collation"`
	Etag                     *string                   `json:"etag"`
	Instance                 *string                   `json:"instance"`
	Kind                     *string                   `json:"kind"`
	Name                     *string                   `json:"name"`
	Project                  *string                   `json:"project"`
	SelfLink                 *string                   `json:"selfLink"`
	SqlserverDatabaseDetails *SQLServerDatabaseDetails `json:"sqlserverDatabaseDetails"`
}
