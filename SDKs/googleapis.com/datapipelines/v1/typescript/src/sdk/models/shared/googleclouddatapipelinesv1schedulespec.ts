import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatapipelinesV1ScheduleSpec
/** 
 * Details of the schedule the pipeline runs on.
**/
export class GoogleCloudDatapipelinesV1ScheduleSpec extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextJobTime" })
  nextJobTime?: string;

  @Metadata({ data: "json, name=schedule" })
  schedule?: string;

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;
}
