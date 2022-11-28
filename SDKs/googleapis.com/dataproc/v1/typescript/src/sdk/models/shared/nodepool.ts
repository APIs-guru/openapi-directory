import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum NodePoolRepairActionEnum {
    RepairActionUnspecified = "REPAIR_ACTION_UNSPECIFIED",
    Delete = "DELETE"
}


// NodePool
/** 
 * indicating a list of workers of same type
**/
export class NodePool extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instanceNames" })
  instanceNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=repairAction" })
  repairAction?: NodePoolRepairActionEnum;
}
