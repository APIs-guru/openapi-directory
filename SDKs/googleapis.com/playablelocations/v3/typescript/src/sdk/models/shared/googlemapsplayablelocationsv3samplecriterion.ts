import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SampleFilter } from "./googlemapsplayablelocationsv3samplefilter";



// GoogleMapsPlayablelocationsV3SampleCriterion
/** 
 * Encapsulates a filter criterion for searching for a set of playable locations.
**/
export class GoogleMapsPlayablelocationsV3SampleCriterion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fieldsToReturn" })
  fieldsToReturn?: string;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: GoogleMapsPlayablelocationsV3SampleFilter;

  @SpeakeasyMetadata({ data: "json, name=gameObjectType" })
  gameObjectType?: number;
}
