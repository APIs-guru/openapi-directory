import { SpeakeasyBase } from "../../../internal/utils/utils";
import { DynamicGroupQuery } from "./dynamicgroupquery";
import { DynamicGroupStatus } from "./dynamicgroupstatus";
/**
 * Dynamic group metadata like queries and status.
**/
export declare class DynamicGroupMetadata extends SpeakeasyBase {
    queries?: DynamicGroupQuery[];
    status?: DynamicGroupStatus;
}
