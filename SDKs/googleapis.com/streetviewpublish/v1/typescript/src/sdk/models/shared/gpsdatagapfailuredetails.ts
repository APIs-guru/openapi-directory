import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GpsDataGapFailureDetails
/** 
 * Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.
**/
export class GpsDataGapFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=gapDuration" })
  gapDuration?: string;

  @Metadata({ data: "json, name=gapStartTime" })
  gapStartTime?: string;
}
