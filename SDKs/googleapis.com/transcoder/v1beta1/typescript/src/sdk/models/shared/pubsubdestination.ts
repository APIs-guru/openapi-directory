import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubDestination
/** 
 * A Pub/Sub destination.
**/
export class PubsubDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
