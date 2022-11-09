import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Pubsub } from "./pubsub";


// Transport
/** 
 * Represents the transport intermediaries created for the trigger to deliver events.
**/
export class Transport extends SpeakeasyBase {
  @Metadata({ data: "json, name=pubsub" })
  pubsub?: Pubsub;
}
