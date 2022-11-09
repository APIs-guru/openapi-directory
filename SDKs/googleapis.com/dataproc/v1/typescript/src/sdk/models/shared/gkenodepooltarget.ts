import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GkeNodePoolConfig } from "./gkenodepoolconfig";

export enum GkeNodePoolTargetRolesEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED"
,    Default = "DEFAULT"
,    Controller = "CONTROLLER"
,    SparkDriver = "SPARK_DRIVER"
,    SparkExecutor = "SPARK_EXECUTOR"
}


// GkeNodePoolTarget
/** 
 * GKE node pools that Dataproc workloads run on.
**/
export class GkeNodePoolTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=nodePool" })
  nodePool?: string;

  @Metadata({ data: "json, name=nodePoolConfig" })
  nodePoolConfig?: GkeNodePoolConfig;

  @Metadata({ data: "json, name=roles" })
  roles?: GkeNodePoolTargetRolesEnum[];
}
