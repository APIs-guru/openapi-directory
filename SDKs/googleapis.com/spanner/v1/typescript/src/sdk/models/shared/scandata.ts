import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VisualizationData } from "./visualizationdata";


// ScanData
/** 
 * ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.
**/
export class ScanData extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: VisualizationData;

  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
