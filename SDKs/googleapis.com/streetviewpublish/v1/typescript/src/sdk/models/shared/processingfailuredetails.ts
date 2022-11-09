import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GpsDataGapFailureDetails } from "./gpsdatagapfailuredetails";
import { ImuDataGapFailureDetails } from "./imudatagapfailuredetails";
import { InsufficientGpsFailureDetails } from "./insufficientgpsfailuredetails";
import { NotOutdoorsFailureDetails } from "./notoutdoorsfailuredetails";


// ProcessingFailureDetails
/** 
 * Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
**/
export class ProcessingFailureDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=gpsDataGapDetails" })
  gpsDataGapDetails?: GpsDataGapFailureDetails;

  @Metadata({ data: "json, name=imuDataGapDetails" })
  imuDataGapDetails?: ImuDataGapFailureDetails;

  @Metadata({ data: "json, name=insufficientGpsDetails" })
  insufficientGpsDetails?: InsufficientGpsFailureDetails;

  @Metadata({ data: "json, name=notOutdoorsDetails" })
  notOutdoorsDetails?: NotOutdoorsFailureDetails;
}
