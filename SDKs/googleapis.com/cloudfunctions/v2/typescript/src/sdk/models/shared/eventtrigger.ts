import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventFilter } from "./eventfilter";


export enum EventTriggerRetryPolicyEnum {
    RetryPolicyUnspecified = "RETRY_POLICY_UNSPECIFIED",
    RetryPolicyDoNotRetry = "RETRY_POLICY_DO_NOT_RETRY",
    RetryPolicyRetry = "RETRY_POLICY_RETRY"
}


// EventTriggerInput
/** 
 * Describes EventTrigger, used to request events to be sent from another service.
**/
export class EventTriggerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter })
  eventFilters?: EventFilter[];

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: EventTriggerRetryPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerRegion" })
  triggerRegion?: string;
}


// EventTrigger
/** 
 * Describes EventTrigger, used to request events to be sent from another service.
**/
export class EventTrigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: string;

  @SpeakeasyMetadata({ data: "json, name=eventFilters", elemType: EventFilter })
  eventFilters?: EventFilter[];

  @SpeakeasyMetadata({ data: "json, name=eventType" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @SpeakeasyMetadata({ data: "json, name=retryPolicy" })
  retryPolicy?: EventTriggerRetryPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=trigger" })
  trigger?: string;

  @SpeakeasyMetadata({ data: "json, name=triggerRegion" })
  triggerRegion?: string;
}
