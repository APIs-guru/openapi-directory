package shared

type CmekSettings struct {
	KmsKeyName        *string `json:"kmsKeyName,omitempty"`
	KmsKeyVersionName *string `json:"kmsKeyVersionName,omitempty"`
	Name              *string `json:"name,omitempty"`
	ServiceAccountID  *string `json:"serviceAccountId,omitempty"`
}
