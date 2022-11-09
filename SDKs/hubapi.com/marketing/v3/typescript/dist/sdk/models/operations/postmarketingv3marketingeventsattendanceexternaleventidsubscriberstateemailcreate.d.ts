import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams extends SpeakeasyBase {
    externalEventId: string;
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams extends SpeakeasyBase {
    externalAccountId?: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity extends SpeakeasyBase {
    option1?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption1;
    option2?: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurityOption2;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreatePathParams;
    queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateQueryParams;
    request: shared.BatchInputMarketingEventEmailSubscriber;
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateSecurity;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateResponse extends SpeakeasyBase {
    batchResponseSubscriberEmailResponse?: shared.BatchResponseSubscriberEmailResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
