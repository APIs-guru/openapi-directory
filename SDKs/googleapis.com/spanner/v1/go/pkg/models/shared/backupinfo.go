package shared

type BackupInfo struct {
	Backup         *string `json:"backup,omitempty"`
	CreateTime     *string `json:"createTime,omitempty"`
	SourceDatabase *string `json:"sourceDatabase,omitempty"`
	VersionTime    *string `json:"versionTime,omitempty"`
}
