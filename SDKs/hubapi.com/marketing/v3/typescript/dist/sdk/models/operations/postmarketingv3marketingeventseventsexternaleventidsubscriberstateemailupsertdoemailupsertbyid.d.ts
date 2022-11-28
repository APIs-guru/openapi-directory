import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams extends SpeakeasyBase {
    externalEventId: string;
    subscriberState: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdPathParams;
    queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdQueryParams;
    request: shared.BatchInputMarketingEventEmailSubscriber;
    security: PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdSubscriberStateEmailUpsertDoEmailUpsertByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
