import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams extends SpeakeasyBase {
    externalEventId: string;
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams extends SpeakeasyBase {
    externalAccountId?: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreatePathParams;
    queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateQueryParams;
    request: shared.BatchInputMarketingEventSubscriber;
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateSecurity;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateCreateCreateResponse extends SpeakeasyBase {
    batchResponseSubscriberVidResponse?: shared.BatchResponseSubscriberVidResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
