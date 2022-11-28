import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SampleSpacingOptions } from "./googlemapsplayablelocationsv3samplespacingoptions";



// GoogleMapsPlayablelocationsV3SampleFilter
/** 
 * Specifies the filters to use when searching for playable locations.
**/
export class GoogleMapsPlayablelocationsV3SampleFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includedTypes" })
  includedTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=maxLocationCount" })
  maxLocationCount?: number;

  @SpeakeasyMetadata({ data: "json, name=spacing" })
  spacing?: GoogleMapsPlayablelocationsV3SampleSpacingOptions;
}
