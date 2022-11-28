import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkerHealthReportResponse
/** 
 * WorkerHealthReportResponse contains information returned to the worker in response to a health ping.
**/
export class WorkerHealthReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reportInterval" })
  reportInterval?: string;
}
