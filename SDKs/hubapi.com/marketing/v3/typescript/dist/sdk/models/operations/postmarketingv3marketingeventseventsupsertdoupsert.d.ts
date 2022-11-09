import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity extends SpeakeasyBase {
    option1?: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption1;
    option2?: PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurityOption2;
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
