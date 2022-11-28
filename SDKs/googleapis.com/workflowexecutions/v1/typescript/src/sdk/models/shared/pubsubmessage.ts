import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PubsubMessage
/** 
 * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
**/
export class PubsubMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=orderingKey" })
  orderingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
