import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2SearchResponseFacetFacetValue } from "./googlecloudretailv2searchresponsefacetfacetvalue";



// GoogleCloudRetailV2SearchResponseFacet
/** 
 * A facet result.
**/
export class GoogleCloudRetailV2SearchResponseFacet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dynamicFacet" })
  dynamicFacet?: boolean;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: GoogleCloudRetailV2SearchResponseFacetFacetValue })
  values?: GoogleCloudRetailV2SearchResponseFacetFacetValue[];
}
