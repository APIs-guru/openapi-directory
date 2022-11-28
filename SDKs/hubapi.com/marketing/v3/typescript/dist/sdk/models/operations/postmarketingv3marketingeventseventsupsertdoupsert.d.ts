import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest extends SpeakeasyBase {
    request: shared.BatchInputMarketingEventCreateRequestParams;
    security: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse extends SpeakeasyBase {
    batchResponseMarketingEventPublicDefaultResponse?: shared.BatchResponseMarketingEventPublicDefaultResponse;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
