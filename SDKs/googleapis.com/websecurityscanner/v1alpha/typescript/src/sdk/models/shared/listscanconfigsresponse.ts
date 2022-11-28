import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanConfig } from "./scanconfig";



// ListScanConfigsResponse
/** 
 * Response for the `ListScanConfigs` method.
**/
export class ListScanConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scanConfigs", elemType: ScanConfig })
  scanConfigs?: ScanConfig[];
}
