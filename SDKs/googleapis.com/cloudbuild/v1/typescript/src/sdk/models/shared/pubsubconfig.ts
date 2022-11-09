import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PubsubConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Ok = "OK"
,    SubscriptionDeleted = "SUBSCRIPTION_DELETED"
,    TopicDeleted = "TOPIC_DELETED"
,    SubscriptionMisconfigured = "SUBSCRIPTION_MISCONFIGURED"
}


// PubsubConfig
/** 
 * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
**/
export class PubsubConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=state" })
  state?: PubsubConfigStateEnum;

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
