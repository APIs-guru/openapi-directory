import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams extends SpeakeasyBase {
    q: string;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity extends SpeakeasyBase {
    option1?: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption1;
    option2?: GetMarketingV3MarketingEventsEventsSearchDoSearchSecurityOption2;
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
