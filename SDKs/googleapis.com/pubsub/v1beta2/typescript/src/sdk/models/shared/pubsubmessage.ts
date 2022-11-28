import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubMessage
/** 
 * A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
**/
export class PubsubMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
