package shared

type CmekSettings struct {
	KmsKeyName        *string `json:"kmsKeyName"`
	KmsKeyVersionName *string `json:"kmsKeyVersionName"`
	Name              *string `json:"name"`
	ServiceAccountID  *string `json:"serviceAccountId"`
}
