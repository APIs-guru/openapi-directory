import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A message that is published by publishers and consumed by subscribers. The message must contain either a non-empty data field or at least one attribute. Note that client libraries represent this object differently depending on the language. See the corresponding [client library documentation](https://cloud.google.com/pubsub/docs/reference/libraries) for more information. See [quotas and limits] (https://cloud.google.com/pubsub/quotas) for more information about message limits.
**/
export declare class PubsubMessage extends SpeakeasyBase {
    attributes?: Map<string, string>;
    data?: string;
    messageId?: string;
    orderingKey?: string;
    publishTime?: string;
}
