import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PubsubMessage } from "./pubsubmessage";


// PubsubEvent
/** 
 * An event indicating a received message or truncation event.
**/
export class PubsubEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=message" })
  message?: PubsubMessage;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;

  @Metadata({ data: "json, name=truncated" })
  truncated?: boolean;
}
