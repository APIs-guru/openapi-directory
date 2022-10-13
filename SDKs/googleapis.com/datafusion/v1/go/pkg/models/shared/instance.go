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
	InstanceStateEnumActive           InstanceStateEnum = "ACTIVE"
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
	Accelerators                []Accelerator                `json:"accelerators"`
	APIEndpoint                 *string                      `json:"apiEndpoint"`
	AvailableVersion            []Version                    `json:"availableVersion"`
	CreateTime                  *string                      `json:"createTime"`
	CryptoKeyConfig             *CryptoKeyConfig             `json:"cryptoKeyConfig"`
	DataprocServiceAccount      *string                      `json:"dataprocServiceAccount"`
	Description                 *string                      `json:"description"`
	DisabledReason              []InstanceDisabledReasonEnum `json:"disabledReason"`
	DisplayName                 *string                      `json:"displayName"`
	EnableRbac                  *bool                        `json:"enableRbac"`
	EnableStackdriverLogging    *bool                        `json:"enableStackdriverLogging"`
	EnableStackdriverMonitoring *bool                        `json:"enableStackdriverMonitoring"`
	EventPublishConfig          *EventPublishConfig          `json:"eventPublishConfig"`
	GcsBucket                   *string                      `json:"gcsBucket"`
	Labels                      map[string]string            `json:"labels"`
	Name                        *string                      `json:"name"`
	NetworkConfig               *NetworkConfig               `json:"networkConfig"`
	Options                     map[string]string            `json:"options"`
	P4ServiceAccount            *string                      `json:"p4ServiceAccount"`
	PrivateInstance             *bool                        `json:"privateInstance"`
	ServiceAccount              *string                      `json:"serviceAccount"`
	ServiceEndpoint             *string                      `json:"serviceEndpoint"`
	State                       *InstanceStateEnum           `json:"state"`
	StateMessage                *string                      `json:"stateMessage"`
	TenantProjectID             *string                      `json:"tenantProjectId"`
	Type                        *InstanceTypeEnum            `json:"type"`
	UpdateTime                  *string                      `json:"updateTime"`
	Version                     *string                      `json:"version"`
	Zone                        *string                      `json:"zone"`
}
