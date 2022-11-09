import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2alphaSearchResponseFacetFacetValue } from "./googlecloudretailv2alphasearchresponsefacetfacetvalue";


// GoogleCloudRetailV2alphaSearchResponseFacet
/** 
 * A facet result.
**/
export class GoogleCloudRetailV2alphaSearchResponseFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicFacet" })
  dynamicFacet?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=values", elemType: shared.GoogleCloudRetailV2alphaSearchResponseFacetFacetValue })
  values?: GoogleCloudRetailV2alphaSearchResponseFacetFacetValue[];
}
