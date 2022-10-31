package shared

type InstanceDisabledReasonEnum string

const (
	InstanceDisabledReasonEnumDisabledReasonUnspecified InstanceDisabledReasonEnum = "DISABLED_REASON_UNSPECIFIED"
	InstanceDisabledReasonEnumKmsKeyIssue               InstanceDisabledReasonEnum = "KMS_KEY_ISSUE"
)

type InstanceStateEnum string

const (
	InstanceStateEnumStateUnspecified InstanceStateEnum = "STATE_UNSPECIFIED"
	InstanceStateEnumCreating         InstanceStateEnum = "CREATING"
	InstanceStateEnumRunning          InstanceStateEnum = "RUNNING"
	InstanceStateEnumFailed           InstanceStateEnum = "FAILED"
	InstanceStateEnumDeleting         InstanceStateEnum = "DELETING"
	InstanceStateEnumUpgrading        InstanceStateEnum = "UPGRADING"
	InstanceStateEnumRestarting       InstanceStateEnum = "RESTARTING"
	InstanceStateEnumUpdating         InstanceStateEnum = "UPDATING"
	InstanceStateEnumAutoUpdating     InstanceStateEnum = "AUTO_UPDATING"
	InstanceStateEnumAutoUpgrading    InstanceStateEnum = "AUTO_UPGRADING"
	InstanceStateEnumDisabled         InstanceStateEnum = "DISABLED"
)

type InstanceTypeEnum string

const (
	InstanceTypeEnumTypeUnspecified InstanceTypeEnum = "TYPE_UNSPECIFIED"
	InstanceTypeEnumBasic           InstanceTypeEnum = "BASIC"
	InstanceTypeEnumEnterprise      InstanceTypeEnum = "ENTERPRISE"
	InstanceTypeEnumDeveloper       InstanceTypeEnum = "DEVELOPER"
)

type Instance struct {
	Accelerators                []Accelerator                `json:"accelerators,omitempty"`
	APIEndpoint                 *string                      `json:"apiEndpoint,omitempty"`
	AvailableVersion            []Version                    `json:"availableVersion,omitempty"`
	CreateTime                  *string                      `json:"createTime,omitempty"`
	CryptoKeyConfig             *CryptoKeyConfig             `json:"cryptoKeyConfig,omitempty"`
	DataprocServiceAccount      *string                      `json:"dataprocServiceAccount,omitempty"`
	Description                 *string                      `json:"description,omitempty"`
	DisabledReason              []InstanceDisabledReasonEnum `json:"disabledReason,omitempty"`
	DisplayName                 *string                      `json:"displayName,omitempty"`
	EnableRbac                  *bool                        `json:"enableRbac,omitempty"`
	EnableStackdriverLogging    *bool                        `json:"enableStackdriverLogging,omitempty"`
	EnableStackdriverMonitoring *bool                        `json:"enableStackdriverMonitoring,omitempty"`
	EventPublishConfig          *EventPublishConfig          `json:"eventPublishConfig,omitempty"`
	GcsBucket                   *string                      `json:"gcsBucket,omitempty"`
	Labels                      map[string]string            `json:"labels,omitempty"`
	Name                        *string                      `json:"name,omitempty"`
	NetworkConfig               *NetworkConfig               `json:"networkConfig,omitempty"`
	Options                     map[string]string            `json:"options,omitempty"`
	P4ServiceAccount            *string                      `json:"p4ServiceAccount,omitempty"`
	PrivateInstance             *bool                        `json:"privateInstance,omitempty"`
	ServiceAccount              *string                      `json:"serviceAccount,omitempty"`
	ServiceEndpoint             *string                      `json:"serviceEndpoint,omitempty"`
	State                       *InstanceStateEnum           `json:"state,omitempty"`
	StateMessage                *string                      `json:"stateMessage,omitempty"`
	TenantProjectID             *string                      `json:"tenantProjectId,omitempty"`
	Type                        *InstanceTypeEnum            `json:"type,omitempty"`
	UpdateTime                  *string                      `json:"updateTime,omitempty"`
	Version                     *string                      `json:"version,omitempty"`
	Zone                        *string                      `json:"zone,omitempty"`
}
