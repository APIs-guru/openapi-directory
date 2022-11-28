import { SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolConfig } from "./gkenodepoolconfig";
export declare enum GkeNodePoolTargetRolesEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Default = "DEFAULT",
    Controller = "CONTROLLER",
    SparkDriver = "SPARK_DRIVER",
    SparkExecutor = "SPARK_EXECUTOR"
}
/**
 * GKE node pools that Dataproc workloads run on.
**/
export declare class GkeNodePoolTarget extends SpeakeasyBase {
    nodePool?: string;
    nodePoolConfig?: GkeNodePoolConfig;
    roles?: GkeNodePoolTargetRolesEnum[];
}
