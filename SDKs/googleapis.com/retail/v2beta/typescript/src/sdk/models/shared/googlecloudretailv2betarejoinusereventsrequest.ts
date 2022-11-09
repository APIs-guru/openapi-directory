import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
,    JoinedEvents = "JOINED_EVENTS"
,    UnjoinedEvents = "UNJOINED_EVENTS"
}


// GoogleCloudRetailV2betaRejoinUserEventsRequest
/** 
 * Request message for RejoinUserEvents method.
**/
export class GoogleCloudRetailV2betaRejoinUserEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEventRejoinScope" })
  userEventRejoinScope?: GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum;
}
