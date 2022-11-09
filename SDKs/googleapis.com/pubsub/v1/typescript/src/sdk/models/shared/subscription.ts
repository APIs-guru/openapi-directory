import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BigQueryConfig } from "./bigqueryconfig";
import { DeadLetterPolicy } from "./deadletterpolicy";
import { ExpirationPolicy } from "./expirationpolicy";
import { PushConfig } from "./pushconfig";
import { RetryPolicy } from "./retrypolicy";

export enum SubscriptionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    ResourceError = "RESOURCE_ERROR"
}


// Subscription
/** 
 * A subscription resource. If none of `push_config` or `bigquery_config` is set, then the subscriber will pull and ack messages using API methods. At most one of these fields may be set.
**/
export class Subscription extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackDeadlineSeconds" })
  ackDeadlineSeconds?: number;

  @Metadata({ data: "json, name=bigqueryConfig" })
  bigqueryConfig?: BigQueryConfig;

  @Metadata({ data: "json, name=deadLetterPolicy" })
  deadLetterPolicy?: DeadLetterPolicy;

  @Metadata({ data: "json, name=detached" })
  detached?: boolean;

  @Metadata({ data: "json, name=enableExactlyOnceDelivery" })
  enableExactlyOnceDelivery?: boolean;

  @Metadata({ data: "json, name=enableMessageOrdering" })
  enableMessageOrdering?: boolean;

  @Metadata({ data: "json, name=expirationPolicy" })
  expirationPolicy?: ExpirationPolicy;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=messageRetentionDuration" })
  messageRetentionDuration?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pushConfig" })
  pushConfig?: PushConfig;

  @Metadata({ data: "json, name=retainAckedMessages" })
  retainAckedMessages?: boolean;

  @Metadata({ data: "json, name=retryPolicy" })
  retryPolicy?: RetryPolicy;

  @Metadata({ data: "json, name=state" })
  state?: SubscriptionStateEnum;

  @Metadata({ data: "json, name=topic" })
  topic?: string;

  @Metadata({ data: "json, name=topicMessageRetentionDuration" })
  topicMessageRetentionDuration?: string;
}
