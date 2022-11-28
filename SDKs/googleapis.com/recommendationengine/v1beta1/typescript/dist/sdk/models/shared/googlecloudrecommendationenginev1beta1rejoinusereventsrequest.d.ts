import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}
/**
 * Request message for CatalogRejoin method.
**/
export declare class GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest extends SpeakeasyBase {
    userEventRejoinScope?: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum;
}
