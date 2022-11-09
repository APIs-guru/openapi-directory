import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VideoProcessingDetailsProcessingProgress
/** 
 * Video processing progress and completion time estimate.
**/
export class VideoProcessingDetailsProcessingProgress extends SpeakeasyBase {
  @Metadata({ data: "json, name=partsProcessed" })
  partsProcessed?: string;

  @Metadata({ data: "json, name=partsTotal" })
  partsTotal?: string;

  @Metadata({ data: "json, name=timeLeftMs" })
  timeLeftMs?: string;
}
