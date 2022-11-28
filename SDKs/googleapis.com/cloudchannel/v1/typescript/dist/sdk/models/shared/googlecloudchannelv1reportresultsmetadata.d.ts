import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1DateRange } from "./googlecloudchannelv1daterange";
import { GoogleCloudChannelV1Report } from "./googlecloudchannelv1report";
/**
 * The features describing the data. Returned by CloudChannelReportsService.RunReportJob and CloudChannelReportsService.FetchReportResults.
**/
export declare class GoogleCloudChannelV1ReportResultsMetadata extends SpeakeasyBase {
    dateRange?: GoogleCloudChannelV1DateRange;
    precedingDateRange?: GoogleCloudChannelV1DateRange;
    report?: GoogleCloudChannelV1Report;
    rowCount?: string;
}
