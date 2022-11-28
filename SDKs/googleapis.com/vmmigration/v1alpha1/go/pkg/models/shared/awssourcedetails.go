package shared

type AwsSourceDetailsStateEnum string

const (
	AwsSourceDetailsStateEnumStateUnspecified AwsSourceDetailsStateEnum = "STATE_UNSPECIFIED"
	AwsSourceDetailsStateEnumPending          AwsSourceDetailsStateEnum = "PENDING"
	AwsSourceDetailsStateEnumFailed           AwsSourceDetailsStateEnum = "FAILED"
	AwsSourceDetailsStateEnumActive           AwsSourceDetailsStateEnum = "ACTIVE"
)

// AwsSourceDetailsInput
// AwsSourceDetails message describes a specific source details for the AWS source type.
type AwsSourceDetailsInput struct {
	AccessKeyID                 *string           `json:"accessKeyId,omitempty"`
	AwsRegion                   *string           `json:"awsRegion,omitempty"`
	Error                       *Status           `json:"error,omitempty"`
	InventorySecurityGroupNames []string          `json:"inventorySecurityGroupNames,omitempty"`
	InventoryTags               map[string]string `json:"inventoryTags,omitempty"`
	MigrationResourcesUserTags  map[string]string `json:"migrationResourcesUserTags,omitempty"`
	SecretAccessKey             *string           `json:"secretAccessKey,omitempty"`
}

// AwsSourceDetails
// AwsSourceDetails message describes a specific source details for the AWS source type.
type AwsSourceDetails struct {
	AccessKeyID                 *string                    `json:"accessKeyId,omitempty"`
	AwsRegion                   *string                    `json:"awsRegion,omitempty"`
	Error                       *Status                    `json:"error,omitempty"`
	InventorySecurityGroupNames []string                   `json:"inventorySecurityGroupNames,omitempty"`
	InventoryTags               map[string]string          `json:"inventoryTags,omitempty"`
	MigrationResourcesUserTags  map[string]string          `json:"migrationResourcesUserTags,omitempty"`
	PublicIP                    *string                    `json:"publicIp,omitempty"`
	SecretAccessKey             *string                    `json:"secretAccessKey,omitempty"`
	State                       *AwsSourceDetailsStateEnum `json:"state,omitempty"`
}
