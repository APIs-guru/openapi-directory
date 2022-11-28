import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Position } from "./position";



// ApproximateProgress
/** 
 * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
**/
export class ApproximateProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: Position;

  @SpeakeasyMetadata({ data: "json, name=remainingTime" })
  remainingTime?: string;
}
