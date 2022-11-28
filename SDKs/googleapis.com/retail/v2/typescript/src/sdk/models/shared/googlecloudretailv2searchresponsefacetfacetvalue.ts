import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2Interval } from "./googlecloudretailv2interval";



// GoogleCloudRetailV2SearchResponseFacetFacetValue
/** 
 * A facet value which contains value names and their count.
**/
export class GoogleCloudRetailV2SearchResponseFacetFacetValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: GoogleCloudRetailV2Interval;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
