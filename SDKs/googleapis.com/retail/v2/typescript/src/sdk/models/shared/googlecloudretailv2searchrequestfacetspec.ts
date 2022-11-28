import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchRequestFacetSpecFacetKey } from "./googlecloudretailv2searchrequestfacetspecfacetkey";



// GoogleCloudRetailV2SearchRequestFacetSpec
/** 
 * A facet specification to perform faceted search.
**/
export class GoogleCloudRetailV2SearchRequestFacetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableDynamicPosition" })
  enableDynamicPosition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedFilterKeys" })
  excludedFilterKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=facetKey" })
  facetKey?: GoogleCloudRetailV2SearchRequestFacetSpecFacetKey;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}
