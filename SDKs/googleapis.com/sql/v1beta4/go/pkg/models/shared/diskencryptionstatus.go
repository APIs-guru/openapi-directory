package shared

type DiskEncryptionStatus struct {
	Kind              *string `json:"kind"`
	KmsKeyVersionName *string `json:"kmsKeyVersionName"`
}
