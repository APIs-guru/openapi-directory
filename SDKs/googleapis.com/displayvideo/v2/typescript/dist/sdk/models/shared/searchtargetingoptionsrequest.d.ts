import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessChainSearchTerms } from "./businesschainsearchterms";
import { GeoRegionSearchTerms } from "./georegionsearchterms";
import { PoiSearchTerms } from "./poisearchterms";
/**
 * Request message for SearchTargetingOptions.
**/
export declare class SearchTargetingOptionsRequest extends SpeakeasyBase {
    advertiserId?: string;
    businessChainSearchTerms?: BusinessChainSearchTerms;
    geoRegionSearchTerms?: GeoRegionSearchTerms;
    pageSize?: number;
    pageToken?: string;
    poiSearchTerms?: PoiSearchTerms;
}
