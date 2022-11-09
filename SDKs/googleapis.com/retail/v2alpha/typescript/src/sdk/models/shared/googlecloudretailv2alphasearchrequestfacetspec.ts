import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey } from "./googlecloudretailv2alphasearchrequestfacetspecfacetkey";


// GoogleCloudRetailV2alphaSearchRequestFacetSpec
/** 
 * A facet specification to perform faceted search.
**/
export class GoogleCloudRetailV2alphaSearchRequestFacetSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableDynamicPosition" })
  enableDynamicPosition?: boolean;

  @Metadata({ data: "json, name=excludedFilterKeys" })
  excludedFilterKeys?: string[];

  @Metadata({ data: "json, name=facetKey" })
  facetKey?: GoogleCloudRetailV2alphaSearchRequestFacetSpecFacetKey;

  @Metadata({ data: "json, name=limit" })
  limit?: number;
}
