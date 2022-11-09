import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";


// GoogleCloudRetailV2alphaSearchResponseFacetFacetValue
/** 
 * A facet value which contains value names and their count.
**/
export class GoogleCloudRetailV2alphaSearchResponseFacetFacetValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: string;

  @Metadata({ data: "json, name=interval" })
  interval?: GoogleCloudRetailV2alphaInterval;

  @Metadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @Metadata({ data: "json, name=minValue" })
  minValue?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
