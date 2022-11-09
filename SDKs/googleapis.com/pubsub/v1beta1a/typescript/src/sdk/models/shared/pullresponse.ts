import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubEvent } from "./pubsubevent";


// PullResponse
/** 
 * Either a PubsubMessage or a truncation event. One of these two must be populated.
**/
export class PullResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackId" })
  ackId?: string;

  @Metadata({ data: "json, name=pubsubEvent" })
  pubsubEvent?: PubsubEvent;
}
