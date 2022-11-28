import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BigQueryConfig } from "./bigqueryconfig";
import { DeadLetterPolicy } from "./deadletterpolicy";
import { ExpirationPolicy } from "./expirationpolicy";
import { PushConfig } from "./pushconfig";
import { RetryPolicy } from "./retrypolicy";


export enum SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    ResourceError = "RESOURCE_ERROR"
}


// Subscription
/** 
 * A subscription resource. If none of `push_config` or `bigquery_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
**/
export class Subscription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackDeadlineSeconds" })
  ackDeadlineSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=bigqueryConfig" })
  bigqueryConfig?: BigQueryConfig;

  @SpeakeasyMetadata({ data: "json, name=deadLetterPolicy" })
  deadLetterPolicy?: DeadLetterPolicy;

  @SpeakeasyMetadata({ data: "json, name=detached" })
  detached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableExactlyOnceDelivery" })
  enableExactlyOnceDelivery?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableMessageOrdering" })
  enableMessageOrdering?: boolean;

  @SpeakeasyMetadata({ data: "json, name=expirationPolicy" })
  expirationPolicy?: ExpirationPolicy;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=messageRetentionDuration" })
  messageRetentionDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pushConfig" })
  pushConfig?: PushConfig;

  @SpeakeasyMetadata({ data: "json, name=retainAckedMessages" })
  retainAckedMessages?: boolean;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: RetryPolicy;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SubscriptionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=topicMessageRetentionDuration" })
  topicMessageRetentionDuration?: string;
}
