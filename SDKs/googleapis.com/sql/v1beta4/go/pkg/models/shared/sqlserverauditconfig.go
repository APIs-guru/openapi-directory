package shared

type SQLServerAuditConfig struct {
	Bucket            *string `json:"bucket"`
	Kind              *string `json:"kind"`
	RetentionInterval *string `json:"retentionInterval"`
	UploadInterval    *string `json:"uploadInterval"`
}
