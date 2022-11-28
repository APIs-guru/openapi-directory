import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FloodlightActivity } from "./floodlightactivity";



// FloodlightActivitiesListResponse
/** 
 * Floodlight Activity List Response
**/
export class FloodlightActivitiesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floodlightActivities", elemType: FloodlightActivity })
  floodlightActivities?: FloodlightActivity[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
