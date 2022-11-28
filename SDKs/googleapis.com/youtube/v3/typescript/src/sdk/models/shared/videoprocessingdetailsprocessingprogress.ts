import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VideoProcessingDetailsProcessingProgress
/** 
 * Video processing progress and completion time estimate.
**/
export class VideoProcessingDetailsProcessingProgress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=partsProcessed" })
  partsProcessed?: string;

  @SpeakeasyMetadata({ data: "json, name=partsTotal" })
  partsTotal?: string;

  @SpeakeasyMetadata({ data: "json, name=timeLeftMs" })
  timeLeftMs?: string;
}
