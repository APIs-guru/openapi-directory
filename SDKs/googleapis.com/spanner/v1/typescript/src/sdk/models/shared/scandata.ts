import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VisualizationData } from "./visualizationdata";



// ScanData
/** 
 * ScanData contains Cloud Key Visualizer scan data used by the caller to construct a visualization.
**/
export class ScanData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: VisualizationData;

  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
