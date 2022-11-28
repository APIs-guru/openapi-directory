import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PubsubConfigStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Ok = "OK",
    SubscriptionDeleted = "SUBSCRIPTION_DELETED",
    TopicDeleted = "TOPIC_DELETED",
    SubscriptionMisconfigured = "SUBSCRIPTION_MISCONFIGURED"
}
/**
 * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
**/
export declare class PubsubConfigInput extends SpeakeasyBase {
    serviceAccountEmail?: string;
    state?: PubsubConfigStateEnum;
    topic?: string;
}
/**
 * PubsubConfig describes the configuration of a trigger that creates a build whenever a Pub/Sub message is published.
**/
export declare class PubsubConfig extends SpeakeasyBase {
    serviceAccountEmail?: string;
    state?: PubsubConfigStateEnum;
    subscription?: string;
    topic?: string;
}
