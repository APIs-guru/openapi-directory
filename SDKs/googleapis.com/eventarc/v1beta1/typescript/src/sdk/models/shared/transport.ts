import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubInput } from "./pubsub";
import { Pubsub } from "./pubsub";



// TransportInput
/** 
 * Represents the transport intermediaries created for the trigger in order to deliver events.
**/
export class TransportInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsub" })
  pubsub?: PubsubInput;
}


// Transport
/** 
 * Represents the transport intermediaries created for the trigger in order to deliver events.
**/
export class Transport extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pubsub" })
  pubsub?: Pubsub;
}
