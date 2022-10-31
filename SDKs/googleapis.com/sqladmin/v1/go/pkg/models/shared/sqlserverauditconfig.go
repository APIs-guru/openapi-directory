package shared

type SQLServerAuditConfig struct {
	Bucket            *string `json:"bucket,omitempty"`
	Kind              *string `json:"kind,omitempty"`
	RetentionInterval *string `json:"retentionInterval,omitempty"`
	UploadInterval    *string `json:"uploadInterval,omitempty"`
}
