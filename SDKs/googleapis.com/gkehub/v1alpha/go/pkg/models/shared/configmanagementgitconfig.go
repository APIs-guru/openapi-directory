package shared



type ConfigManagementGitConfig struct {
    GcpServiceAccountEmail *string `json:"gcpServiceAccountEmail,omitempty"`
    HTTPSProxy *string `json:"httpsProxy,omitempty"`
    PolicyDir *string `json:"policyDir,omitempty"`
    SecretType *string `json:"secretType,omitempty"`
    SyncBranch *string `json:"syncBranch,omitempty"`
    SyncRepo *string `json:"syncRepo,omitempty"`
    SyncRev *string `json:"syncRev,omitempty"`
    SyncWaitSecs *string `json:"syncWaitSecs,omitempty"`
    
}

