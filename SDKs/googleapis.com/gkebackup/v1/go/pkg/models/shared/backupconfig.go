package shared

type BackupConfig struct {
	AllNamespaces        *bool            `json:"allNamespaces"`
	EncryptionKey        *EncryptionKey   `json:"encryptionKey"`
	IncludeSecrets       *bool            `json:"includeSecrets"`
	IncludeVolumeData    *bool            `json:"includeVolumeData"`
	SelectedApplications *NamespacedNames `json:"selectedApplications"`
	SelectedNamespaces   *Namespaces      `json:"selectedNamespaces"`
}
