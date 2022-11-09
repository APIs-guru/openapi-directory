import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkerHealthReportResponse
/** 
 * WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
**/
export class WorkerHealthReportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=reportInterval" })
  reportInterval?: string;
}
