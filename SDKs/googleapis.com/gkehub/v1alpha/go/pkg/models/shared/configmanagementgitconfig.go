package shared

type ConfigManagementGitConfig struct {
	GcpServiceAccountEmail *string `json:"gcpServiceAccountEmail"`
	HTTPSProxy             *string `json:"httpsProxy"`
	PolicyDir              *string `json:"policyDir"`
	SecretType             *string `json:"secretType"`
	SyncBranch             *string `json:"syncBranch"`
	SyncRepo               *string `json:"syncRepo"`
	SyncRev                *string `json:"syncRev"`
	SyncWaitSecs           *string `json:"syncWaitSecs"`
}
