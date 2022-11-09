import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PubsubMessage
/** 
 * A message data and its attributes. The message payload must not be empty; it must contain either a non-empty data field, or at least one attribute.
**/
export class PubsubMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
