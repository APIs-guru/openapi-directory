package shared

type ConfigManagementHierarchyControllerDeploymentStateExtensionEnum string

const (
	ConfigManagementHierarchyControllerDeploymentStateExtensionEnumDeploymentStateUnspecified ConfigManagementHierarchyControllerDeploymentStateExtensionEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementHierarchyControllerDeploymentStateExtensionEnumNotInstalled               ConfigManagementHierarchyControllerDeploymentStateExtensionEnum = "NOT_INSTALLED"
	ConfigManagementHierarchyControllerDeploymentStateExtensionEnumInstalled                  ConfigManagementHierarchyControllerDeploymentStateExtensionEnum = "INSTALLED"
	ConfigManagementHierarchyControllerDeploymentStateExtensionEnumError                      ConfigManagementHierarchyControllerDeploymentStateExtensionEnum = "ERROR"
)

type ConfigManagementHierarchyControllerDeploymentStateHncEnum string

const (
	ConfigManagementHierarchyControllerDeploymentStateHncEnumDeploymentStateUnspecified ConfigManagementHierarchyControllerDeploymentStateHncEnum = "DEPLOYMENT_STATE_UNSPECIFIED"
	ConfigManagementHierarchyControllerDeploymentStateHncEnumNotInstalled               ConfigManagementHierarchyControllerDeploymentStateHncEnum = "NOT_INSTALLED"
	ConfigManagementHierarchyControllerDeploymentStateHncEnumInstalled                  ConfigManagementHierarchyControllerDeploymentStateHncEnum = "INSTALLED"
	ConfigManagementHierarchyControllerDeploymentStateHncEnumError                      ConfigManagementHierarchyControllerDeploymentStateHncEnum = "ERROR"
)

type ConfigManagementHierarchyControllerDeploymentState struct {
	Extension *ConfigManagementHierarchyControllerDeploymentStateExtensionEnum `json:"extension,omitempty"`
	Hnc       *ConfigManagementHierarchyControllerDeploymentStateHncEnum       `json:"hnc,omitempty"`
}
