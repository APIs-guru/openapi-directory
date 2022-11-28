import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest extends SpeakeasyBase {
    pathParams: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams;
    queryParams: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams;
    request: shared.MarketingEventUpdateRequestParams;
    security: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventPublicDefaultResponse?: shared.MarketingEventPublicDefaultResponse;
    statusCode: number;
}
