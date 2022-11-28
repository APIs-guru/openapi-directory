import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaInterval } from "./googlecloudretailv2betainterval";



// GoogleCloudRetailV2betaSearchResponseFacetFacetValue
/** 
 * A facet value which contains value names and their count.
**/
export class GoogleCloudRetailV2betaSearchResponseFacetFacetValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: GoogleCloudRetailV2betaInterval;

  @SpeakeasyMetadata({ data: "json, name=maxValue" })
  maxValue?: number;

  @SpeakeasyMetadata({ data: "json, name=minValue" })
  minValue?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
