import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED"
,    JoinedEvents = "JOINED_EVENTS"
,    UnjoinedEvents = "UNJOINED_EVENTS"
}


// GoogleCloudRetailV2alphaRejoinUserEventsRequest
/** 
 * Request message for RejoinUserEvents method.
**/
export class GoogleCloudRetailV2alphaRejoinUserEventsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=userEventRejoinScope" })
  userEventRejoinScope?: GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum;
}
