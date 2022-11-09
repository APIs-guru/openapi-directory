import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DynamicGroupQuery } from "./dynamicgroupquery";
import { DynamicGroupStatus } from "./dynamicgroupstatus";


// DynamicGroupMetadata
/** 
 * Dynamic group metadata like queries and status.
**/
export class DynamicGroupMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=queries", elemType: shared.DynamicGroupQuery })
  queries?: DynamicGroupQuery[];

  @Metadata({ data: "json, name=status" })
  status?: DynamicGroupStatus;
}
