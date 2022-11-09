import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BusinessChainSearchTerms } from "./businesschainsearchterms";
import { GeoRegionSearchTerms } from "./georegionsearchterms";
import { PoiSearchTerms } from "./poisearchterms";


// SearchTargetingOptionsRequest
/** 
 * Request message for SearchTargetingOptions.
**/
export class SearchTargetingOptionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=businessChainSearchTerms" })
  businessChainSearchTerms?: BusinessChainSearchTerms;

  @Metadata({ data: "json, name=geoRegionSearchTerms" })
  geoRegionSearchTerms?: GeoRegionSearchTerms;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=poiSearchTerms" })
  poiSearchTerms?: PoiSearchTerms;
}
