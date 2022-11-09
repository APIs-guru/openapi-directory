import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventFilter } from "./eventfilter";

export enum EventTriggerRetryPolicyEnum {
    RetryPolicyUnspecified = "RETRY_POLICY_UNSPECIFIED"
,    RetryPolicyDoNotRetry = "RETRY_POLICY_DO_NOT_RETRY"
,    RetryPolicyRetry = "RETRY_POLICY_RETRY"
}


// EventTrigger
/** 
 * Describes EventTrigger, used to request events to be sent from another service.
**/
export class EventTrigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel?: string;

  @Metadata({ data: "json, name=eventFilters", elemType: shared.EventFilter })
  eventFilters?: EventFilter[];

  @Metadata({ data: "json, name=eventType" })
  eventType?: string;

  @Metadata({ data: "json, name=pubsubTopic" })
  pubsubTopic?: string;

  @Metadata({ data: "json, name=retryPolicy" })
  retryPolicy?: EventTriggerRetryPolicyEnum;

  @Metadata({ data: "json, name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "json, name=trigger" })
  trigger?: string;

  @Metadata({ data: "json, name=triggerRegion" })
  triggerRegion?: string;
}
