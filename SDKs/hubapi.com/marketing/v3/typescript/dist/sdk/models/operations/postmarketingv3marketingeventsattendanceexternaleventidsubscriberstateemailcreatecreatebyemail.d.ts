import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams extends SpeakeasyBase {
    externalEventId: string;
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams extends SpeakeasyBase {
    externalAccountId?: string;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailPathParams;
    queryParams: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailQueryParams;
    request: shared.BatchInputMarketingEventEmailSubscriber;
    security: PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailSecurity;
}
export declare class PostMarketingV3MarketingEventsAttendanceExternalEventIdSubscriberStateEmailCreateCreateByEmailResponse extends SpeakeasyBase {
    batchResponseSubscriberEmailResponse?: shared.BatchResponseSubscriberEmailResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
