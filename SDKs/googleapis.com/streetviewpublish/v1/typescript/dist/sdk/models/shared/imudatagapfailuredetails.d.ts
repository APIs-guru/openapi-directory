import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details related to ProcessingFailureReason#IMU_DATA_GAP. If there are multiple IMU data gaps, only the one with the largest duration is reported here.
**/
export declare class ImuDataGapFailureDetails extends SpeakeasyBase {
    gapDuration?: string;
    gapStartTime?: string;
}
