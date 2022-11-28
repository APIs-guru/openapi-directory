package shared

type GkeNodePoolTargetRolesEnum string

const (
	GkeNodePoolTargetRolesEnumRoleUnspecified GkeNodePoolTargetRolesEnum = "ROLE_UNSPECIFIED"
	GkeNodePoolTargetRolesEnumDefault         GkeNodePoolTargetRolesEnum = "DEFAULT"
	GkeNodePoolTargetRolesEnumController      GkeNodePoolTargetRolesEnum = "CONTROLLER"
	GkeNodePoolTargetRolesEnumSparkDriver     GkeNodePoolTargetRolesEnum = "SPARK_DRIVER"
	GkeNodePoolTargetRolesEnumSparkExecutor   GkeNodePoolTargetRolesEnum = "SPARK_EXECUTOR"
)

// GkeNodePoolTarget
// GKE node pools that Dataproc workloads run on.
type GkeNodePoolTarget struct {
	NodePool       *string                      `json:"nodePool,omitempty"`
	NodePoolConfig *GkeNodePoolConfig           `json:"nodePoolConfig,omitempty"`
	Roles          []GkeNodePoolTargetRolesEnum `json:"roles,omitempty"`
}
