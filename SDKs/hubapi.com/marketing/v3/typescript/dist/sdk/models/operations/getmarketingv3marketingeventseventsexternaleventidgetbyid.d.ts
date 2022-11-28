import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest extends SpeakeasyBase {
    pathParams: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams;
    queryParams: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams;
    security: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventPublicReadResponse?: shared.MarketingEventPublicReadResponse;
    statusCode: number;
}
