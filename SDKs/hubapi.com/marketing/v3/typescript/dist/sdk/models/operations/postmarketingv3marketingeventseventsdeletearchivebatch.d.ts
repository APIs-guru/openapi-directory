import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchRequest extends SpeakeasyBase {
    request: shared.BatchInputMarketingEventExternalUniqueIdentifier;
    security: PostMarketingV3MarketingEventsEventsDeleteArchiveBatchSecurity;
}
export declare class PostMarketingV3MarketingEventsEventsDeleteArchiveBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
