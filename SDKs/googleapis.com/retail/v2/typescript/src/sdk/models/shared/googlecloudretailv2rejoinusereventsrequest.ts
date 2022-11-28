import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}


// GoogleCloudRetailV2RejoinUserEventsRequest
/** 
 * Request message for RejoinUserEvents method.
**/
export class GoogleCloudRetailV2RejoinUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEventRejoinScope" })
  userEventRejoinScope?: GoogleCloudRetailV2RejoinUserEventsRequestUserEventRejoinScopeEnum;
}
