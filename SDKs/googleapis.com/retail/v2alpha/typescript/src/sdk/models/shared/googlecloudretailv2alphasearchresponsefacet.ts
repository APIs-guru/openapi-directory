import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaSearchResponseFacetFacetValue } from "./googlecloudretailv2alphasearchresponsefacetfacetvalue";



// GoogleCloudRetailV2alphaSearchResponseFacet
/** 
 * A facet result.
**/
export class GoogleCloudRetailV2alphaSearchResponseFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacet" })
  dynamicFacet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: GoogleCloudRetailV2alphaSearchResponseFacetFacetValue })
  values?: GoogleCloudRetailV2alphaSearchResponseFacetFacetValue[];
}
