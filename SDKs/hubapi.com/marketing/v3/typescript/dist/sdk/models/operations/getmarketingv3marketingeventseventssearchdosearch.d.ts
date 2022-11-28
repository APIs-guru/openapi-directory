import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams extends SpeakeasyBase {
    q: string;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchRequest extends SpeakeasyBase {
    queryParams: GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams;
    security: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    collectionResponseMarketingEventExternalUniqueIdentifierNoPaging?: shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging;
    contentType: string;
    statusCode: number;
}
