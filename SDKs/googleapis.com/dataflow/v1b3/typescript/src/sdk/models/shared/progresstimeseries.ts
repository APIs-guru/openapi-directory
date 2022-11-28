import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Point } from "./point";



// ProgressTimeseries
/** 
 * Information about the progress of some component of job execution.
**/
export class ProgressTimeseries extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentProgress" })
  currentProgress?: number;

  @SpeakeasyMetadata({ data: "json, name=dataPoints", elemType: Point })
  dataPoints?: Point[];
}
