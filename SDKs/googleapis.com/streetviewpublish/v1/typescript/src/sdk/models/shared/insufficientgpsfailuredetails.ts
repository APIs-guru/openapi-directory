import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsufficientGpsFailureDetails
/** 
 * Details related to ProcessingFailureReason#INSUFFICIENT_GPS.
**/
export class InsufficientGpsFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gpsPointsFound" })
  gpsPointsFound?: number;
}
