import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey } from "./googlecloudretailv2alphasearchrequestfacetspecfacetkey";



// GoogleCloudRetailV2alphaSearchRequestFacetSpec
/** 
 * A facet specification to perform faceted search.
**/
export class GoogleCloudRetailV2alphaSearchRequestFacetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableDynamicPosition" })
  enableDynamicPosition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedFilterKeys" })
  excludedFilterKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=facetKey" })
  facetKey?: GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}
