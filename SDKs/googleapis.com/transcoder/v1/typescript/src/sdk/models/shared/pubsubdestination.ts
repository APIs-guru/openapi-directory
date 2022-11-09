import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubsubDestination
/** 
 * A Pub/Sub destination.
**/
export class PubsubDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
