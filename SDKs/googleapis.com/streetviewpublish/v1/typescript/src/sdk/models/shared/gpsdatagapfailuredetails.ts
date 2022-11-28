import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GpsDataGapFailureDetails
/** 
 * Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.
**/
export class GpsDataGapFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gapDuration" })
  gapDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=gapStartTime" })
  gapStartTime?: string;
}
