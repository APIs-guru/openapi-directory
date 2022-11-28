import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}
/**
 * Request message for RejoinUserEvents method.
**/
export declare class GoogleCloudRetailV2betaRejoinUserEventsRequest extends SpeakeasyBase {
    userEventRejoinScope?: GoogleCloudRetailV2betaRejoinUserEventsRequestUserEventRejoinScopeEnum;
}
