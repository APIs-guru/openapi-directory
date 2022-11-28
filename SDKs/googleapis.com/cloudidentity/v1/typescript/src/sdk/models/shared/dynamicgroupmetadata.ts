import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DynamicGroupQuery } from "./dynamicgroupquery";
import { DynamicGroupStatus } from "./dynamicgroupstatus";



// DynamicGroupMetadata
/** 
 * Dynamic group metadata like queries and status.
**/
export class DynamicGroupMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queries", elemType: DynamicGroupQuery })
  queries?: DynamicGroupQuery[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DynamicGroupStatus;
}
