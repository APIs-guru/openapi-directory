import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActivityContentDetails } from "./activitycontentdetails";
import { ActivitySnippet } from "./activitysnippet";



// Activity
/** 
 * An *activity* resource contains information about an action that a particular channel, or user, has taken on YouTube.The actions reported in activity feeds include rating a video, sharing a video, marking a video as a favorite, commenting on a video, uploading a video, and so forth. Each activity resource identifies the type of action, the channel associated with the action, and the resource(s) associated with the action, such as the video that was rated or uploaded.
**/
export class Activity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: ActivityContentDetails;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: ActivitySnippet;
}
