import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EstimationTimePoint
/** 
 * Represents a point in time.
**/
export class EstimationTimePoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimationTimeFrameOffset" })
  estimationTimeFrameOffset?: string;
}
