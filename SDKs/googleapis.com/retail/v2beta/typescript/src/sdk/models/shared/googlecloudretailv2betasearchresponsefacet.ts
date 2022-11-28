import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaSearchResponseFacetFacetValue } from "./googlecloudretailv2betasearchresponsefacetfacetvalue";



// GoogleCloudRetailV2betaSearchResponseFacet
/** 
 * A facet result.
**/
export class GoogleCloudRetailV2betaSearchResponseFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacet" })
  dynamicFacet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: GoogleCloudRetailV2betaSearchResponseFacetFacetValue })
  values?: GoogleCloudRetailV2betaSearchResponseFacetFacetValue[];
}
