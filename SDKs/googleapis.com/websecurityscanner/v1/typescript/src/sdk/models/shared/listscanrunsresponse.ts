import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanRun } from "./scanrun";



// ListScanRunsResponse
/** 
 * Response for the `ListScanRuns` method.
**/
export class ListScanRunsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scanRuns", elemType: ScanRun })
  scanRuns?: ScanRun[];
}
