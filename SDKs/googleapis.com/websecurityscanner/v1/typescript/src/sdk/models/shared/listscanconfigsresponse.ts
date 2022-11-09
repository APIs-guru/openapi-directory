import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ScanConfig } from "./scanconfig";


// ListScanConfigsResponse
/** 
 * Response for the `ListScanConfigs` method.
**/
export class ListScanConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=scanConfigs", elemType: shared.ScanConfig })
  scanConfigs?: ScanConfig[];
}
