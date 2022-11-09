import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsCreateSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostMarketingV3MarketingEventsEventsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsCreateSecurity extends SpeakeasyBase {
    option1?: PostMarketingV3MarketingEventsEventsCreateSecurityOption1;
    option2?: PostMarketingV3MarketingEventsEventsCreateSecurityOption2;
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
