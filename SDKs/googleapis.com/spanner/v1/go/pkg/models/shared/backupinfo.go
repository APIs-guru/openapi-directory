package shared

type BackupInfo struct {
	Backup         *string `json:"backup"`
	CreateTime     *string `json:"createTime"`
	SourceDatabase *string `json:"sourceDatabase"`
	VersionTime    *string `json:"versionTime"`
}
