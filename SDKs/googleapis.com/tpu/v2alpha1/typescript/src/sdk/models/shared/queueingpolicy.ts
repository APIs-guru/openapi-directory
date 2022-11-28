import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Interval } from "./interval";



// QueueingPolicy
/** 
 * Defines the policy of the QueuedRequest.
**/
export class QueueingPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validAfterDuration" })
  validAfterDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=validAfterTime" })
  validAfterTime?: string;

  @SpeakeasyMetadata({ data: "json, name=validInterval" })
  validInterval?: Interval;

  @SpeakeasyMetadata({ data: "json, name=validUntilDuration" })
  validUntilDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=validUntilTime" })
  validUntilTime?: string;
}
