import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreatePathParams extends SpeakeasyBase {
    externalEventId: string;
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateQueryParams extends SpeakeasyBase {
    externalAccountId?: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurity extends SpeakeasyBase {
    option1?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption1;
    option2?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurityOption2;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreatePathParams;
    queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateQueryParams;
    request: shared.BatchInputMarketingEventSubscriber;
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateSecurity;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateResponse extends SpeakeasyBase {
    batchResponseSubscriberVidResponse?: shared.BatchResponseSubscriberVidResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
