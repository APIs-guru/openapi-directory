package shared

type GkeNodePoolTargetRolesEnum string

const (
	GkeNodePoolTargetRolesEnumRoleUnspecified GkeNodePoolTargetRolesEnum = "ROLE_UNSPECIFIED"
	GkeNodePoolTargetRolesEnumDefault         GkeNodePoolTargetRolesEnum = "DEFAULT"
	GkeNodePoolTargetRolesEnumController      GkeNodePoolTargetRolesEnum = "CONTROLLER"
	GkeNodePoolTargetRolesEnumSparkDriver     GkeNodePoolTargetRolesEnum = "SPARK_DRIVER"
	GkeNodePoolTargetRolesEnumSparkExecutor   GkeNodePoolTargetRolesEnum = "SPARK_EXECUTOR"
)

type GkeNodePoolTarget struct {
	NodePool       *string                      `json:"nodePool"`
	NodePoolConfig *GkeNodePoolConfig           `json:"nodePoolConfig"`
	Roles          []GkeNodePoolTargetRolesEnum `json:"roles"`
}
