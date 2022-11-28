import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubEvent } from "./pubsubevent";



// PullResponse
/** 
 * Either a PubsubMessage or a truncation event. One of these two must be populated.
**/
export class PullResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackId" })
  ackId?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubEvent" })
  pubsubEvent?: PubsubEvent;
}
