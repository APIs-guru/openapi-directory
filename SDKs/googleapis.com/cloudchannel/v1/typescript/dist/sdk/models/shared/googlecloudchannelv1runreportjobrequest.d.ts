import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1DateRange } from "./googlecloudchannelv1daterange";
/**
 * Request message for CloudChannelReportsService.RunReportJob.
**/
export declare class GoogleCloudChannelV1RunReportJobRequest extends SpeakeasyBase {
    dateRange?: GoogleCloudChannelV1DateRange;
    filter?: string;
    languageCode?: string;
}
