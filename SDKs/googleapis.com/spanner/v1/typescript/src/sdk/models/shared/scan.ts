import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ScanData } from "./scandata";



// Scan
/** 
 * Scan is a structure which describes Cloud Key Visualizer scan information.
**/
export class Scan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=scanData" })
  scanData?: ScanData;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
