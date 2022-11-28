package shared

type UpgradeInstanceInternalRequestTypeEnum string

const (
	UpgradeInstanceInternalRequestTypeEnumUpgradeTypeUnspecified UpgradeInstanceInternalRequestTypeEnum = "UPGRADE_TYPE_UNSPECIFIED"
	UpgradeInstanceInternalRequestTypeEnumUpgradeFramework       UpgradeInstanceInternalRequestTypeEnum = "UPGRADE_FRAMEWORK"
	UpgradeInstanceInternalRequestTypeEnumUpgradeOs              UpgradeInstanceInternalRequestTypeEnum = "UPGRADE_OS"
	UpgradeInstanceInternalRequestTypeEnumUpgradeCuda            UpgradeInstanceInternalRequestTypeEnum = "UPGRADE_CUDA"
	UpgradeInstanceInternalRequestTypeEnumUpgradeAll             UpgradeInstanceInternalRequestTypeEnum = "UPGRADE_ALL"
)

// UpgradeInstanceInternalRequest
// Request for upgrading a notebook instance from within the VM
type UpgradeInstanceInternalRequest struct {
	Type *UpgradeInstanceInternalRequestTypeEnum `json:"type,omitempty"`
	VMID *string                                 `json:"vmId,omitempty"`
}
