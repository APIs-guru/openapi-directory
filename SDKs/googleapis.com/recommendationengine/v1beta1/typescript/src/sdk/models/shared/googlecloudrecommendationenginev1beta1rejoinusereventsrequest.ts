import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum {
    UserEventRejoinScopeUnspecified = "USER_EVENT_REJOIN_SCOPE_UNSPECIFIED",
    JoinedEvents = "JOINED_EVENTS",
    UnjoinedEvents = "UNJOINED_EVENTS"
}


// GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest
/** 
 * Request message for CatalogRejoin method.
**/
export class GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userEventRejoinScope" })
  userEventRejoinScope?: GoogleCloudRecommendationengineV1beta1RejoinUserEventsRequestUserEventRejoinScopeEnum;
}
