import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Schedule } from "./schedule";


// ListSchedulesResponse
/** 
 * Response for listing scheduled notebook job.
**/
export class ListSchedulesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=schedules", elemType: shared.Schedule })
  schedules?: Schedule[];

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
