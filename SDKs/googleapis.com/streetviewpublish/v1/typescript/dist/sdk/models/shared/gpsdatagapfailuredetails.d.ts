import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details related to ProcessingFailureReason#GPS_DATA_GAP. If there are multiple GPS data gaps, only the one with the largest duration is reported here.
**/
export declare class GpsDataGapFailureDetails extends SpeakeasyBase {
    gapDuration?: string;
    gapStartTime?: string;
}
