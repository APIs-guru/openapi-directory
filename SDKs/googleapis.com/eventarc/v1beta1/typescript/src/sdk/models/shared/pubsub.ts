import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Pubsub
/** 
 * Represents a Pub/Sub transport.
**/
export class Pubsub extends SpeakeasyBase {
  @Metadata({ data: "json, name=subscription" })
  subscription?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
