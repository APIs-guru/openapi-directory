import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GpsDataGapFailureDetails } from "./gpsdatagapfailuredetails";
import { ImuDataGapFailureDetails } from "./imudatagapfailuredetails";
import { InsufficientGpsFailureDetails } from "./insufficientgpsfailuredetails";
import { NotOutdoorsFailureDetails } from "./notoutdoorsfailuredetails";



// ProcessingFailureDetails
/** 
 * Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
**/
export class ProcessingFailureDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gpsDataGapDetails" })
  gpsDataGapDetails?: GpsDataGapFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=imuDataGapDetails" })
  imuDataGapDetails?: ImuDataGapFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=insufficientGpsDetails" })
  insufficientGpsDetails?: InsufficientGpsFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=notOutdoorsDetails" })
  notOutdoorsDetails?: NotOutdoorsFailureDetails;
}
