import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";


// GoogleCloudRetailV2betaSearchResponseFacetFacetValue
/** 
 * A facet value which contains value names and their count.
**/
export class GoogleCloudRetailV2betaSearchResponseFacetFacetValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: GoogleCloudRetailV2betaInterval;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
