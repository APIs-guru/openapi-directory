import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsCreateSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsCreateRequest extends SpeakeasyBase {
    request: shared.MarketingEventCreateRequestParams;
    security: PostMarketingV3MarketingEventsEventsCreateSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
}
