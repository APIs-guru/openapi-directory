import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanConfig } from "./scanconfig";



// ListScanConfigsResponse
/** 
 * A list of scan configs for the project.
**/
export class ListScanConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=scanConfigs", elemType: ScanConfig })
  scanConfigs?: ScanConfig[];
}
