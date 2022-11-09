import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity extends SpeakeasyBase {
    option1?: PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1;
    option2?: PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2;
}
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveRequest extends SpeakeasyBase {
    request: shared.BatchInputMarketingEventExternalUniqueIdentifier;
    security: PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
