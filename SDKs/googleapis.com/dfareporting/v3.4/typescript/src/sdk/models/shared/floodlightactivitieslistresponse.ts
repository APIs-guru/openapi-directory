import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FloodlightActivity } from "./floodlightactivity";


// FloodlightActivitiesListResponse
/** 
 * Floodlight Activity List Response
**/
export class FloodlightActivitiesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=floodlightActivities", elemType: shared.FloodlightActivity })
  floodlightActivities?: FloodlightActivity[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
