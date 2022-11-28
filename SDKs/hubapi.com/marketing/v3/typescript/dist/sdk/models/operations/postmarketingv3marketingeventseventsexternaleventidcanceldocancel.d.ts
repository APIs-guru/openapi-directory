import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams extends SpeakeasyBase {
    externalEventId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams extends SpeakeasyBase {
    externalAccountId: string;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest extends SpeakeasyBase {
    pathParams: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams;
    queryParams: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams;
    security: PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    marketingEventDefaultResponse?: shared.MarketingEventDefaultResponse;
    statusCode: number;
}
