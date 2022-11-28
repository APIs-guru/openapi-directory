import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PullMessage
/** 
 * Pull Message. This proto can only be used for tasks in a queue which has PULL type. It currently exists for backwards compatibility with the App Engine Task Queue SDK. This message type maybe returned with methods list and get, when the response view is FULL.
**/
export class PullMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
