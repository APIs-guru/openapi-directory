import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey } from "./googlecloudretailv2betasearchrequestfacetspecfacetkey";



// GoogleCloudRetailV2betaSearchRequestFacetSpec
/** 
 * A facet specification to perform faceted search.
**/
export class GoogleCloudRetailV2betaSearchRequestFacetSpec extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableDynamicPosition" })
  enableDynamicPosition?: boolean;

  @SpeakeasyMetadata({ data: "json, name=excludedFilterKeys" })
  excludedFilterKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=facetKey" })
  facetKey?: GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;
}
