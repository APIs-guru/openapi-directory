import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SingleClusterRouting
/** 
 * Unconditionally routes all read/write requests to a specific cluster. This option preserves read-your-writes consistency but does not improve availability.
**/
export class SingleClusterRouting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowTransactionalWrites" })
  allowTransactionalWrites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;
}
