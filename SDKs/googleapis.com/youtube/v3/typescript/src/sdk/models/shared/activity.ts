import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ActivityContentDetails } from "./activitycontentdetails";
import { ActivitySnippet } from "./activitysnippet";


// Activity
/** 
 * An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
**/
export class Activity extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: ActivityContentDetails;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: ActivitySnippet;
}
