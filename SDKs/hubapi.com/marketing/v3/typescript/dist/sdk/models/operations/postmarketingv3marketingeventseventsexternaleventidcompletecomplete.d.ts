import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompletePathParams;
    queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteQueryParams;
    request: shared.MarketingEventCompleteRequestParams;
    security: PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCompleteCompleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
}
