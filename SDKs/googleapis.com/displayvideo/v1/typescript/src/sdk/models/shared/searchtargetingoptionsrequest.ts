import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BusinessChainSearchTerms } from "./businesschainsearchterms";
import { GeoRegionSearchTerms } from "./georegionsearchterms";
import { PoiSearchTerms } from "./poisearchterms";



// SearchTargetingOptionsRequest
/** 
 * Request message for SearchTargetingOptions.
**/
export class SearchTargetingOptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=businessChainSearchTerms" })
  businessChainSearchTerms?: BusinessChainSearchTerms;

  @SpeakeasyMetadata({ data: "json, name=geoRegionSearchTerms" })
  geoRegionSearchTerms?: GeoRegionSearchTerms;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=poiSearchTerms" })
  poiSearchTerms?: PoiSearchTerms;
}
