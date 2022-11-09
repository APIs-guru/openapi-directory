import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SingleClusterRouting
/** 
 * Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
**/
export class SingleClusterRouting extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowTransactionalWrites" })
  allowTransactionalWrites?: boolean;

  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;
}
