import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}


// GoogleCloudRetailV2alphaRejoinUserEventsRequest
/** 
 * Request message for RejoinUserEvents method.
**/
export class GoogleCloudRetailV2alphaRejoinUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEventRejoinScope" })
  userEventRejoinScope?: GoogleCloudRetailV2alphaRejoinUserEventsRequestUserEventRejoinScopeEnum;
}
