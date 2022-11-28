import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PubsubConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ok = "OK",
    SubscriptionDeleted = "SUBSCRIPTION_DELETED",
    TopicDeleted = "TOPIC_DELETED",
    SubscriptionMisconfigured = "SUBSCRIPTION_MISCONFIGURED"
}


// PubsubConfigInput
/** 
 * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
**/
export class PubsubConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PubsubConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}


// PubsubConfig
/** 
 * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
**/
export class PubsubConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: PubsubConfigStateEnum;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;
}
