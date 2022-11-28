import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams extends SpeakeasyBase {
    externalEventId: string;
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdPathParams;
    queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdQueryParams;
    request: shared.BatchInputMarketingEventSubscriber;
    security: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateUpsertDoUpsertByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
