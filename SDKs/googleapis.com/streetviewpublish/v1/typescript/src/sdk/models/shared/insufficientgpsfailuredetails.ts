import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsufficientGpsFailureDetails
/** 
 * Details related to ProcessingFailureReason#INSUFFICIENT_GPS.
**/
export class InsufficientGpsFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=gpsPointsFound" })
  gpsPointsFound?: number;
}
