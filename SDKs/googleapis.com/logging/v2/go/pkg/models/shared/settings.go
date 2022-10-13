package shared

type Settings struct {
	DisableDefaultSink  *bool   `json:"disableDefaultSink"`
	KmsKeyName          *string `json:"kmsKeyName"`
	KmsServiceAccountID *string `json:"kmsServiceAccountId"`
	Name                *string `json:"name"`
	StorageLocation     *string `json:"storageLocation"`
}
