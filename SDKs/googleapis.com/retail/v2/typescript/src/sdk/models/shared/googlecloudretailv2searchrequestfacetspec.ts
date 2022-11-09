import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2SearchRequestFacetSpecFacetKey } from "./googlecloudretailv2searchrequestfacetspecfacetkey";


// GoogleCloudRetailV2SearchRequestFacetSpec
/** 
 * A facet specification to perform faceted search.
**/
export class GoogleCloudRetailV2SearchRequestFacetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableDynamicPosition" })
  enableDynamicPosition?: boolean;

  @Metadata({ data: "json, name=excludedFilterKeys" })
  excludedFilterKeys?: string[];

  @Metadata({ data: "json, name=facetKey" })
  facetKey?: GoogleCloudRetailV2SearchRequestFacetSpecFacetKey;

  @Metadata({ data: "json, name=limit" })
  limit?: number;
}
