package shared

type DiskEncryptionConfiguration struct {
	Kind       *string `json:"kind"`
	KmsKeyName *string `json:"kmsKeyName"`
}
