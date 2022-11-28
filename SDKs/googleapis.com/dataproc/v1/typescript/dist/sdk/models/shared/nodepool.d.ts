import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NodePoolRepairActionEnum {
    RepairActionUnspecified = "REPAIR_ACTION_UNSPECIFIED",
    Delete = "DELETE"
}
/**
 * indicating a list of workers of same type
**/
export declare class NodePool extends SpeakeasyBase {
    id?: string;
    instanceNames?: string[];
    repairAction?: NodePoolRepairActionEnum;
}
