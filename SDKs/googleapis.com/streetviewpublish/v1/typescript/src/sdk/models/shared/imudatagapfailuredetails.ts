import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImuDataGapFailureDetails
/** 
 * Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.
**/
export class ImuDataGapFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gapDuration" })
  gapDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=gapStartTime" })
  gapStartTime?: string;
}
