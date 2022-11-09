import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey } from "./googlecloudretailv2betasearchrequestfacetspecfacetkey";


// GoogleCloudRetailV2betaSearchRequestFacetSpec
/** 
 * A facet specification to perform faceted search.
**/
export class GoogleCloudRetailV2betaSearchRequestFacetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableDynamicPosition" })
  enableDynamicPosition?: boolean;

  @Metadata({ data: "json, name=excludedFilterKeys" })
  excludedFilterKeys?: string[];

  @Metadata({ data: "json, name=facetKey" })
  facetKey?: GoogleCloudRetailV2betaSearchRequestFacetSpecFacetKey;

  @Metadata({ data: "json, name=limit" })
  limit?: number;
}
