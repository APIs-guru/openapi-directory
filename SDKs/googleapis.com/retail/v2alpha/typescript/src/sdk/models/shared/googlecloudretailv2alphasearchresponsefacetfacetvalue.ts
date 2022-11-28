import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaInterval } from "./googlecloudretailv2alphainterval";



// GoogleCloudRetailV2alphaSearchResponseFacetFacetValue
/** 
 * A facet value which contains value names and their count.
**/
export class GoogleCloudRetailV2alphaSearchResponseFacetFacetValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: GoogleCloudRetailV2alphaInterval;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
