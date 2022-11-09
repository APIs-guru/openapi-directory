import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EstimationTimePoint
/** 
 * Represents a point in time.
**/
export class EstimationTimePoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimationTimeFrameOffset" })
  estimationTimeFrameOffset?: string;
}
