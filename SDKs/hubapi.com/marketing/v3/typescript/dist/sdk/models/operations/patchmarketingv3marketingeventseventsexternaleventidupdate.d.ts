import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity extends SpeakeasyBase {
    option1?: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption1;
    option2?: PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurityOption2;
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
