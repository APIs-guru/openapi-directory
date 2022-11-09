import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Position } from "./position";


// ApproximateProgress
/** 
 * Obsolete in favor of ApproximateReportedProgress and ApproximateSplitRequest.
**/
export class ApproximateProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentComplete" })
  percentComplete?: number;

  @Metadata({ data: "json, name=position" })
  position?: Position;

  @Metadata({ data: "json, name=remainingTime" })
  remainingTime?: string;
}
