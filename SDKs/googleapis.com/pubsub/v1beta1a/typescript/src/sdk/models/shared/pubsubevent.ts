import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PubsubMessage } from "./pubsubmessage";



// PubsubEvent
/** 
 * An event indicating a received message or truncation event.
**/
export class PubsubEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: PubsubMessage;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
