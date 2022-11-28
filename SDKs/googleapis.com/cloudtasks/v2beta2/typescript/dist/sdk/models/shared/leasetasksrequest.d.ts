import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LeaseTasksRequestResponseViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Request message for leasing tasks using LeaseTasks.
**/
export declare class LeaseTasksRequest extends SpeakeasyBase {
    filter?: string;
    leaseDuration?: string;
    maxTasks?: number;
    responseView?: LeaseTasksRequestResponseViewEnum;
}
