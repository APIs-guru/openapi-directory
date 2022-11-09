import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleMapsPlayablelocationsV3SampleFilter } from "./googlemapsplayablelocationsv3samplefilter";


// GoogleMapsPlayablelocationsV3SampleCriterion
/** 
 * Encapsulates a filter criterion for searching for a set of playable locations.
**/
export class GoogleMapsPlayablelocationsV3SampleCriterion extends SpeakeasyBase {
  @Metadata({ data: "json, name=fieldsToReturn" })
  fieldsToReturn?: string;

  @Metadata({ data: "json, name=filter" })
  filter?: GoogleMapsPlayablelocationsV3SampleFilter;

  @Metadata({ data: "json, name=gameObjectType" })
  gameObjectType?: number;
}
