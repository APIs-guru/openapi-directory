import { SpeakeasyBase } from "../../../internal/utils";
import { GpsDataGapFailureDetails } from "./gpsdatagapfailuredetails";
import { ImuDataGapFailureDetails } from "./imudatagapfailuredetails";
import { InsufficientGpsFailureDetails } from "./insufficientgpsfailuredetails";
import { NotOutdoorsFailureDetails } from "./notoutdoorsfailuredetails";
/**
 * Additional details to accompany the ProcessingFailureReason enum. This message is always expected to be used in conjunction with ProcessingFailureReason, and the oneof value set in this message should match the FailureReason.
**/
export declare class ProcessingFailureDetails extends SpeakeasyBase {
    gpsDataGapDetails?: GpsDataGapFailureDetails;
    imuDataGapDetails?: ImuDataGapFailureDetails;
    insufficientGpsDetails?: InsufficientGpsFailureDetails;
    notOutdoorsDetails?: NotOutdoorsFailureDetails;
}
