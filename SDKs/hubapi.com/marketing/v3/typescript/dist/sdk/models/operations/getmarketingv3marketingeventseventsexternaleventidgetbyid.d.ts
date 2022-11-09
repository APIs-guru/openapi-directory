import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity extends SpeakeasyBase {
    option1?: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption1;
    option2?: GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurityOption2;
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
