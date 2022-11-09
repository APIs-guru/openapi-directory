import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2SearchResponseFacetFacetValue } from "./googlecloudretailv2searchresponsefacetfacetvalue";


// GoogleCloudRetailV2SearchResponseFacet
/** 
 * A facet result.
**/
export class GoogleCloudRetailV2SearchResponseFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicFacet" })
  dynamicFacet?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=values", elemType: shared.GoogleCloudRetailV2SearchResponseFacetFacetValue })
  values?: GoogleCloudRetailV2SearchResponseFacetFacetValue[];
}
