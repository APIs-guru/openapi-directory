import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRetailV2betaSearchResponseFacetFacetValue } from "./googlecloudretailv2betasearchresponsefacetfacetvalue";


// GoogleCloudRetailV2betaSearchResponseFacet
/** 
 * A facet result.
**/
export class GoogleCloudRetailV2betaSearchResponseFacet extends SpeakeasyBase {
  @Metadata({ data: "json, name=dynamicFacet" })
  dynamicFacet?: boolean;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=values", elemType: shared.GoogleCloudRetailV2betaSearchResponseFacetFacetValue })
  values?: GoogleCloudRetailV2betaSearchResponseFacetFacetValue[];
}
