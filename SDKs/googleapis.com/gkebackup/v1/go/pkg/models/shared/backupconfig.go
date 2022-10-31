package shared



type BackupConfig struct {
    AllNamespaces *bool `json:"allNamespaces,omitempty"`
    EncryptionKey *EncryptionKey `json:"encryptionKey,omitempty"`
    IncludeSecrets *bool `json:"includeSecrets,omitempty"`
    IncludeVolumeData *bool `json:"includeVolumeData,omitempty"`
    SelectedApplications *NamespacedNames `json:"selectedApplications,omitempty"`
    SelectedNamespaces *Namespaces `json:"selectedNamespaces,omitempty"`
    
}

