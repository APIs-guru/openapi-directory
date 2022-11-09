import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum NodePoolRepairActionEnum {
    RepairActionUnspecified = "REPAIR_ACTION_UNSPECIFIED"
,    Delete = "DELETE"
}


// NodePool
/** 
 * indicating a list of workers of same type
**/
export class NodePool extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instanceNames" })
  instanceNames?: string[];

  @Metadata({ data: "json, name=repairAction" })
  repairAction?: NodePoolRepairActionEnum;
}
