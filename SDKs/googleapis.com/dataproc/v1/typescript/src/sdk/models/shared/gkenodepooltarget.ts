import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GkeNodePoolConfig } from "./gkenodepoolconfig";


export enum GkeNodePoolTargetRolesEnum {
    RoleUnspecified = "ROLE_UNSPECIFIED",
    Default = "DEFAULT",
    Controller = "CONTROLLER",
    SparkDriver = "SPARK_DRIVER",
    SparkExecutor = "SPARK_EXECUTOR"
}


// GkeNodePoolTarget
/** 
 * GKE node pools that Dataproc workloads run on.
**/
export class GkeNodePoolTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nodePool" })
  nodePool?: string;

  @SpeakeasyMetadata({ data: "json, name=nodePoolConfig" })
  nodePoolConfig?: GkeNodePoolConfig;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: GkeNodePoolTargetRolesEnum[];
}
