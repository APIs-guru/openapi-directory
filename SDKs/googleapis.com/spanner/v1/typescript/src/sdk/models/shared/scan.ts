import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScanData } from "./scandata";


// Scan
/** 
 * Scan is a structure which describes Cloud Key Visualizer scan information.
**/
export class Scan extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: Map<string, any>;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=scanData" })
  scanData?: ScanData;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
