import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SampleSpacingOptions } from "./googlemapsplayablelocationsv3samplespacingoptions";
/**
 * Specifies the filters to use when searching for playable locations.
**/
export declare class GoogleMapsPlayablelocationsV3SampleFilter extends SpeakeasyBase {
    includedTypes?: string[];
    maxLocationCount?: number;
    spacing?: GoogleMapsPlayablelocationsV3SampleSpacingOptions;
}
