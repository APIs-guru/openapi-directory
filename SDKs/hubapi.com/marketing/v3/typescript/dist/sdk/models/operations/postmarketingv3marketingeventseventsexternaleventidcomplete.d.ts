import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity extends SpeakeasyBase {
    option1?: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption1;
    option2?: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurityOption2;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompletePathParams;
    queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteQueryParams;
    request: shared.MarketingEventCompleteRequestParams;
    security: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
}
