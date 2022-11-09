import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScanRun } from "./scanrun";


// ListScanRunsResponse
/** 
 * Response for the `ListScanRuns` method.
**/
export class ListScanRunsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=scanRuns", elemType: shared.ScanRun })
  scanRuns?: ScanRun[];
}
