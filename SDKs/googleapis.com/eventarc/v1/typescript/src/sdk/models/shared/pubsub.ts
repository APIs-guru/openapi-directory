import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubInput
/** 
 * Represents a Pub/Sub transport.
**/
export class PubsubInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


// Pubsub
/** 
 * Represents a Pub/Sub transport.
**/
export class Pubsub extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
