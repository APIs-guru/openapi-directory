import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImuDataGapFailureDetails
/** 
 * Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.
**/
export class ImuDataGapFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=gapDuration" })
  gapDuration?: string;

  @Metadata({ data: "json, name=gapStartTime" })
  gapStartTime?: string;
}
