import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Schedule } from "./schedule";



// ListSchedulesResponse
/** 
 * Response for listing scheduled notebook job.
**/
export class ListSchedulesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=schedules", elemType: Schedule })
  schedules?: Schedule[];

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
